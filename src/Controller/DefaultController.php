<?php

namespace App\Controller;

use App\Form\ContactType;
use App\Handler\ContactHandler;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class DefaultController extends AbstractController
{
    /**
     * @Route("/", name="home")
     */
    public function index()
    {
        return $this->render('default/index.html.twig', []);
    }

    /**
     * @Route("/contact", name="contact")
     */
    public function contact(Request $request, ContactHandler $formHandler)
    {
        if ($formHandler->formHandle($request, ContactType::class)) {
            return $this->redirectToRoute('contact');
        } else {
            return $this->render('default/contact.html.twig', [
                'form' => $formHandler->getView()
            ]);
        }
    }
}
