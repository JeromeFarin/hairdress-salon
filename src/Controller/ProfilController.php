<?php

namespace App\Controller;

use App\Form\AvatarType;
use App\Form\ProfilType;
use App\Handler\AvatarHandler;
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
    public function avatar(Request $request, AvatarHandler $formHandler)
    {
        // dd($request->files->get('file'),$request);
        $formHandler->formHandle($request, AvatarType::class, $this->getUser());
        $formHandler->process($formHandler->getData(),['avatar' => $request->files->get('file')]);
        return $this->json(true);
    }
}
