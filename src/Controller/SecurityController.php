<?php

namespace App\Controller;

use App\Entity\User;
use App\Handler\RegisterHandler;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\Common\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Request;
use App\Form\RegisterType;
use App\Handler\FlashRegisterHandler;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

class SecurityController extends AbstractController
{
    private $manager;
    private $encoder;

    public function __construct(ManagerRegistry $manager, UserPasswordEncoderInterface $encoder) {
        $this->manager = $manager;
        $this->encoder = $encoder;
    }

    /**
     * @Route("/register", name="security_register")
     */
    public function register(Request $request, RegisterHandler $formHandler)
    {
        if ($formHandler->formHandle($request, RegisterType::class, new User())) {
            return $this->redirectToRoute('security_login');
        } else {
            return $this->render('security/register.html.twig', [
                'form' => $formHandler->getView()
            ]);
        }
    }

    /**
     * @Route("/login", name="security_login")
     */
    public function login(AuthenticationUtils $authenticationUtils): Response
    {
        return $this->render('security/login.html.twig', [
            'last_username' => $authenticationUtils->getLastUsername(), 
            'error' => $authenticationUtils->getLastAuthenticationError()
        ]);
    }

    /**
     * @Route("/logout", name="security_logout")
     */
    public function logout() {}

    /**
     * @Route("/register/flash", name="security_flash_register")
     */
    public function flashRegister(Request $request, FlashRegisterHandler $handler)
    {
        return $this->json($handler->createUser(json_decode($request->getContent(), true)), 201);
    }
}
