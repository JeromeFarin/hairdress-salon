<?php

namespace App\Controller;

use App\Form\ContactType;
use App\Handler\ContactHandler;
use App\Repository\SalonOptionRepository;
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

    /**
     * @Route("/api/opened", name="api_opened")
     */
    public function apiOpened(SalonOptionRepository $repository)
    {
        $return = [];
        foreach ($repository->findAll() as $value) {
            if ($value->getTitle() === 'start_opened') {
                $return['start'] = $value->getValue();
            }
            if ($value->getTitle() === 'end_opened') {
                $return['end'] = $value->getValue();
            }
        }
        return $this->json($return, 200);
    }
}
