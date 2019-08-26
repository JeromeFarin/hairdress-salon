<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\Common\Persistence\ObjectManager;
use Symfony\Component\HttpFoundation\Request;
use App\Form\UserType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use App\Entity\User;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use App\Repository\UserRepository;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;

class SecurityController extends AbstractController
{
    private $manager;
    private $encoder;
    private $userRepo;
    private $mailer;

    public function __construct(ObjectManager $manager, UserPasswordEncoderInterface $encoder, UserRepository $userRepo, \Swift_Mailer $mailer) {
        $this->manager = $manager;
        $this->encoder = $encoder;
        $this->userRepo = $userRepo;
        $this->mailer = $mailer;
    }

    /**
     * @Route("/register", name="security.register")
     */
    public function register(Request $request)
    {
        $form = $this->createForm(UserType::class);
        $form->add('submit', SubmitType::class, ['label' => 'Register']);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $form->getData()->setPassword($this->encoder->encodePassword($form->getData(), $form->getData()->getPassword()));

            $this->manager->persist($form->getData());
            $this->manager->flush();

            return $this->redirectToRoute('security.login');
        }

        return $this->render('security/register.html.twig', [
            'form' => $form->createView()
        ]);
    }

    /**
     * @Route("/login", name="security.login")
     */
    public function login(AuthenticationUtils $authenticationUtils): Response
    {
        return $this->render('security/login.html.twig', ['last_username' => $authenticationUtils->getLastUsername(), 'error' => $authenticationUtils->getLastAuthenticationError()]);
    }

    /**
     * @Route("/logout", name="security.logout")
     */
    public function logout()
    {
        return $this->redirectToRoute('security.login');
    }

    /**
     * Reset password with known user
     *
     * @Route("/reset/{id}", name="security.reset")
     */
    public function reset(Request $request, int $id)
    {
        if (!empty($this->getUser())) {
            if ($id === $this->getUser()->getId()) {
                $user = $this->userRepo->find($id);

                $form = $this->createFormBuilder()
                    ->add('old_password', PasswordType::class)
                    ->add('new_password', PasswordType::class)
                    ->add('new_password_2', PasswordType::class, ['label' => 'Repeat Password'])
                    ->add('submit', SubmitType::class)
                    ->getForm();

                $form->handleRequest($request);

                if ($form->isSubmitted()) {
                    if ($this->encoder->isPasswordValid($user, $form->get('old_password')->getData())) {
                        if ($form->get('new_password')->getData() === $form->get('new_password_2')->getData()) {
                            $this->resetPassword($user, $form->get('new_password')->getData());
                        }
                        $this->addFlash('error', 'You must enter the same new password');
                    }
                    $this->addFlash('error', 'Wrong password for ' . $user->getEmail());
                }

                return $this->render('security/reset_password.html.twig', [
                    'form' => $form->createView()
                 ]);
            }
        }

        return $this->redirectToRoute('home');
    }

    /**
     * Forgot password
     *
     * @Route("/forgot/{id}", name="security.forgot")
     * @param Request $request
     */ 
    public function forgot(Request $request, int $id = null)
    {
        $form = $this->createFormBuilder()->getForm();

        if ($id != null) {
            $form->add('code', IntegerType::class)
                 ->add('new_password', PasswordType::class)
                 ->add('new_password_2', PasswordType::class, ['label' => 'Repeat Password'])
                 ->add('submit', SubmitType::class);
        } else {
            $form->add('email', EmailType::class)
                 ->add('submit', SubmitType::class);
        }

        $form->handleRequest($request);

        if ($form->isSubmitted()) {
            if (isset($form['email'])) {
                $user = $this->userRepo->findOneBy(['email' => $form['email']->getData()]);

                $this->sendMail($user->getEmail(),'Reset password', 'email/forgot_password.html.twig', [
                    'firstName' => $user->getFirstName(),
                    'code' => $this->generateCode($user),
                    'user' => $user
                ]);

                return $this->redirectToRoute('home');
            } else {
                $user = $this->userRepo->find($id);
                if ($this->checkCode($user, $form['code']->getData())) {
                    $user->setCode(null);
                    $user->setPassword($this->encoder->encodePassword($user, $form['new_password']->getData()));

                    $this->manager->persist($user);
                    $this->manager->flush();

                    return $this->redirectToRoute('security.login');
                }
            }
        }

        return $this->render('security/forgot_password.html.twig', [
            'form' => $form->createView()
        ]);
    }

    private function resetPassword(User $user, string $password)
    {
        $user->setPassword($this->encoder->encodePassword($user, $password));

        $this->manager->persist($user);
        $this->manager->flush();

        return $this->redirectToRoute('security.logout');
    }

    private function uploadAvatar(UploadedFile $file, int $id)
    {
        $fileName = $id . '.' . $file->guessExtension();
        $file->move(
            '/img/avatar',
            $fileName
        );

        return $fileName;
    }

    private function sendMail(string $receiver, string $title, string $body, array $option = [])
    {
        $message = (new \Swift_Message($title))
            ->setFrom('hairdress@gmail.com')
            ->setTo($receiver)
            ->setBody(
                $this->renderView(
                    $body,
                    $option
                ),
                'text/html'
            )
        ;

        if ($this->mailer->send($message)) {
            $this->addFlash('success', 'An email was send to ' . $receiver);
            return true;
        } else {
            $this->addFlash('error', 'An error blocked the sending of the email, please retry later');
            return false;
        }
    }

    private function generateCode(User $user)
    {
        $code = rand(1000,9999);

        $user->setCode($code . time() + 1800);

        $this->manager->persist($user);
        $this->manager->flush();
        
        return $code;
    }

    private function checkCode(User $user, int $code)
    {
        $userCode = substr($user->getCode(),0,4);
        $validity = substr($user->getCode(),4);

        if ($userCode == $code) {
            if ($validity >= time()) {
                return true;
            }
        }

        return false;
    }
}
