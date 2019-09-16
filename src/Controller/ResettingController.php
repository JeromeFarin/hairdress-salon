<?php

namespace App\Controller;

use App\Form\ForgotType;
use App\Form\FormHandler;
use App\Form\ResetType;
use App\Mailer\ForgotMailer;
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
    private $form_handler;

    public function __construct(UserRepository $userRepository, ObjectManager $manager, FormHandler $form_handler) {
        $this->userRepository = $userRepository;
        $this->manager = $manager;
        $this->form_handler = $form_handler;
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

        if ($this->form_handler->formHandle($request,ResetType::class)) {
            if ($this->form_handler->getData()->getCode() == null) {
                $this->form_handler->getData()->setLastUpdate(new \DateTime());
            } else {
                $this->form_handler->getData()->setCode(null);
            }
            
            $this->manager->persist($this->form_handler->getData());
            $this->manager->flush();

            return $this->redirectToRoute('security_login');
        } else {
            return $this->render('resetting/reset.html.twig', [
                'form' => $this->form_handler->getView()
            ]);
        }
    }

    /**
     * @Route("/forgot", name="resetting_forgot")
     */
    public function forgot(Request $request, ForgotMailer $mailer)
    {
        if ($this->form_handler->formHandle($request,ForgotType::class)) {
            $user = $this->userRepository->findOneByEmail($this->form_handler->getData()->getEmail());
            if ($user) {
                $code = md5(uniqid());
                $user->setCode($code);
                
                $this->manager->persist($user);
                $this->manager->flush();

                $send = $mailer->sendMail('Reset Password',$user->getEmail(),['firstName' => $user->getFirstName(),'url' => $this->generateUrl('resetting_reset',[],0) . '/' . $code]);

                if ($send) {
                    $this->addFlash('success', 'An email was sent to ' . $user->getEmail());
                } else {
                    $this->addFlash('error', 'An error was occured, please contact a administrator');
                }
            } else {
                $this->addFlash('error', 'No user found for ' . $this->form_handler->getData()->getEmail());
            }
        } else {
            return $this->render('resetting/forgot.html.twig', [
                'form' => $this->form_handler->getView()
            ]);
        }
    }
}
