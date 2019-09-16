<?php

namespace App\Controller;

use App\Form\FormHandler;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\Common\Persistence\ObjectManager;
use Symfony\Component\HttpFoundation\Request;
use App\Form\RegisterType;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

class SecurityController extends AbstractController
{
    private $manager;
    private $encoder;
    private $form_handler;

    public function __construct(ObjectManager $manager, UserPasswordEncoderInterface $encoder, FormHandler $form_handler) {
        $this->manager = $manager;
        $this->encoder = $encoder;
        $this->form_handler = $form_handler;
    }

    /**
     * @Route("/register", name="security_register")
     */
    public function register(Request $request)
    {
        if ($this->form_handler->formHandle($request,RegisterType::class)) {
            $this->manager->persist($this->form_handler->getData());
            $this->manager->flush();

            return $this->redirectToRoute('security_login');
        } else {
            return $this->render('security/register.html.twig', [
                'form' => $this->form_handler->getView()
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
}
