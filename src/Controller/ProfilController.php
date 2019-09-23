<?php

namespace App\Controller;

use App\Form\ProfilType;
use App\Handler\ProfilHandler;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class ProfilController extends AbstractController
{
    /**
     * @Route("/profil", name="profil_index")
     */
    public function index()
    {
        return $this->render('profil/index.html.twig', [
            'user' => $this->getUser(),
        ]);
    }

    /**
     * @Route("/profil/edit", name="profil_edit")
     */
    public function edit(Request $request, ProfilHandler $formHandler)
    {
        if ($formHandler->formHandle($request, ProfilType::class, $this->getUser())) {
            return $this->redirectToRoute('profil_index');
        } else {
            return $this->render('profil/edit.html.twig', [
                'form' => $formHandler->getView()
            ]);
        }
    }
}
