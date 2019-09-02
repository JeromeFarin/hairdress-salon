<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\Common\Persistence\ObjectManager;
use Symfony\Component\HttpFoundation\Request;
use App\Form\RegisterType;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;
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
     * @Route("/register", name="security_register")
     */
    public function register(Request $request)
    {
        $form = $this->createForm(RegisterType::class)->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $form->getData()->setPassword($this->encoder->encodePassword($form->getData(), $form->getData()->getPlainPassword()));

            $this->manager->persist($form->getData());
            $this->manager->flush();

            return $this->redirectToRoute('security_login');
        }

        return $this->render('security/register.html.twig', [
            'form' => $form->createView()
        ]);
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
