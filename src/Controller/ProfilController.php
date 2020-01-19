<?php

namespace App\Controller;

use App\Form\AvatarType;
use App\Form\ProfilType;
use App\Handler\AvatarHandler;
use App\Handler\ProfilEditHandler;
use App\Repository\UnavailabilityRepository;
use JMS\Serializer\SerializationContext;
use JMS\Serializer\SerializerBuilder;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class ProfilController extends AbstractController
{
    /**
     * @Route("/profil", name="profil_index")
     */
    public function index(UnavailabilityRepository $unavailabilityRepository)
    {
        return $this->render('profil/index.html.twig', [
            'user' => $this->getUser(),
            'unavailabilities' => $unavailabilityRepository->findCurrent()
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
        $formHandler->formHandle($request, AvatarType::class, $this->getUser());
        $formHandler->process($formHandler->getData(),['avatar' => $request->files->get('file')]);
        return $this->json(true);
    }

    /**
     * @Route("/api/user", name="api_user")
     */
    public function apiUser()
    {
        if ($this->getUser() !== null) {
            $serializer = SerializerBuilder::create()->build();
            $jsonContent = $serializer->serialize($this->getUser(), 'json', SerializationContext::create()->enableMaxDepthChecks());
        } else {
            $jsonContent = null;
        }
        return $this->json($jsonContent, 200);
    }
}
