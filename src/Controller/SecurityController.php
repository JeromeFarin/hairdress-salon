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

class SecurityController extends AbstractController
{
    private $manager;
    private $encoder;
    private $userRepo;

    public function __construct(ObjectManager $manager, UserPasswordEncoderInterface $encoder, UserRepository $userRepo) {
        $this->manager = $manager;
        $this->encoder = $encoder;
        $this->userRepo = $userRepo;
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
        // if ($this->getUser()) {
        //    $this->redirectToRoute('target_path');
        // }

        // get the login error if there is one
        $error = $authenticationUtils->getLastAuthenticationError();
        // last username entered by the user
        $lastUsername = $authenticationUtils->getLastUsername();

        return $this->render('security/login.html.twig', ['last_username' => $lastUsername, 'error' => $error]);
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
     * @return 
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
}
