<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\ForgotType;
use App\Form\ResetType;
use App\Repository\UserRepository;
use Doctrine\Common\Persistence\ObjectManager;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

/**
 * @Route("/resetting")
 */
class ResettingController extends AbstractController
{
    private $userRepository;

    private $manager;

    public function __construct(UserRepository $userRepository, ObjectManager $manager) {
        $this->userRepository = $userRepository;
        $this->manager = $manager;
    }

    /**
     * @Route("/reset/{code}", name="resetting_reset")
     */
    public function reset(Request $request, string $code = "", UserPasswordEncoderInterface $encoder)
    {
        if ($code == "") {
            // Get logged in User
            $user = $this->getUser();
            if ($user == null) {
                $this->addFlash('error', 'You are not logged in or wrong code to reset the password');
                return $this->redirectToRoute('home');
            }
        } else {
            // Get User with code
            $user = $this->userRepository->findOneByCode($code);
            if ($user == null) {
                $this->addFlash('error', 'You are not logged in or wrong code to reset the password');
                return $this->redirectToRoute('home');
            }
        }

        $form = $this->createForm(ResetType::class, $user)->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $form->getData()->setPassword($encoder->encodePassword($form->getData(), $form->getData()->getPlainPassword()));
            $form->getData()->setCode(null);
            
            $this->manager->persist($form->getData());
            $this->manager->flush();

            return $this->redirectToRoute('security_login');
        }

        return $this->render('resetting/reset.html.twig', [
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/forgot", name="resetting_forgot")
     */
    public function forgot(Request $request, MailerController $mailerController)
    {
        $user = new User();

        $form = $this->createForm(ForgotType::class, $user)->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $user = $this->userRepository->findOneByEmail($form->getData()->getEmail());
            if ($user) {
                $code = md5(uniqid());
                $user->setCode($code);
                
                $this->manager->persist($user);
                $this->manager->flush();

                $send = $mailerController->sendMail($user->getEmail(),'Reset Password','email/forgot.html.twig',['firstName' => $user->getFirstName(),'url' => $this->generateUrl('resetting_reset',[],0) . '/' . $code]);

                if ($send) {
                    $this->addFlash('success', 'An email was sent to ' . $user->getEmail());
                } else {
                    $this->addFlash('error', 'An error was occured, please contact a administrator');
                }
            } else {
                $this->addFlash('error', 'No user found for ' . $form->getData()->getEmail());
            }
        }

        return $this->render('resetting/forgot.html.twig', [
            'form' => $form->createView(),
        ]);
    }
}
