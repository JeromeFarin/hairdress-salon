<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\Common\Persistence\ObjectManager;
use Symfony\Component\HttpFoundation\Request;

class SecurityController extends AbstractController
{
    private $manager;

    public function __construct(ObjectManager $manager) {
        $this->manager = $manager;
    }

    /**
     * @Route("/register", name="security.register")
     */
    public function register(Request $request)
    {
        return $this->render('security/register.html.twig', [

        ]);
    }

    /**
     * @Route("/login", name="security.login")
     */
    public function login(Request $request)
    {
        return $this->render('security/login.html.twig', [

        ]);
    }

    /**
     * @Route("/logout", name="security.logout")
     */
    public function logout()
    {
        return $this->redirectToRoute('home');
    }
}
