<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\ForgotType;
use App\Form\ResetType;
use App\Handler\ForgotHandler;
use App\Handler\ResetHandler;
use App\Mailer\ForgotMailer;
use App\Repository\UserRepository;
use Doctrine\Common\Persistence\ObjectManager;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

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
    public function reset(Request $request, ResetHandler $formHandler, string $code = "")
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

        if ($formHandler->formHandle($request, ResetType::class, $user)) {
            return $this->redirectToRoute('security_login');
        } else {
            return $this->render('resetting/reset.html.twig', [
                'form' => $formHandler->getView()
            ]);
        }
    }

    /**
     * @Route("/forgot", name="resetting_forgot")
     */
    public function forgot(Request $request, ForgotHandler $formHandler)
    {
        if ($formHandler->formHandle($request, ForgotType::class, new User())) {
            return $this->redirectToRoute('resetting_forgot');
        } else {
            return $this->render('resetting/forgot.html.twig', [
                'form' => $formHandler->getView()
            ]);
        }
    }
}
