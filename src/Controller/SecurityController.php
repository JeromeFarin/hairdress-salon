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

class SecurityController extends AbstractController
{
    private $manager;

    public function __construct(ObjectManager $manager) {
        $this->manager = $manager;
    }

    /**
     * @Route("/register", name="security.register")
     */
    public function register(Request $request, UserPasswordEncoderInterface $encoder)
    {
        $form = $this->createForm(UserType::class);
        $form->add('submit', SubmitType::class, ['label' => 'Register']);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $form->getData()->setPassword($encoder->encodePassword($form->getData(), $form->getData()->getPassword()));

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
        throw new \Exception('This method can be blank - it will be intercepted by the logout key on your firewall');
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
