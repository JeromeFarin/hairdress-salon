<?php

namespace App\Controller;

use App\Form\ProfilType;
use App\Handler\ProfilEditHandler;
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
    public function edit(Request $request, ProfilEditHandler $formHandler)
    {
        if ($formHandler->formHandle($request, ProfilType::class, $this->getUser())) {
            return $this->redirectToRoute('profil_index');
        } else {
            return $this->render('profil/edit.html.twig', [
                'form' => $formHandler->getView()
            ]);
        }
    }

    /**
     * @Route("/profil/avatar", name="profil_avatar")
     */
    public function avatar(Request $request)
    {
        return $this->render('modal/update_avatar.html.twig', []);
        // dd($request);
        // return $this->redirectToRoute('profil_index');
    }
}
