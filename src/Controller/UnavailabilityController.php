<?php

namespace App\Controller;

use App\Entity\Unavailability;
use App\Form\UnavailabilityType;
use App\Handler\UnavailabilityHandler;
use App\Repository\UnavailabilityRepository;
use JMS\Serializer\SerializationContext;
use JMS\Serializer\SerializerBuilder;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class UnavailabilityController extends AbstractController
{
    /**
     * @Route("/staff/unavailabilities/add", name="unavailability_add")
     */
    public function addUnavailability(Request $request, UnavailabilityHandler $formHandler)
    {
        $staff = (new Unavailability())->setStaff($this->getUser());
        if ($formHandler->formHandle($request, UnavailabilityType::class, $staff)) {
            return $this->redirectToRoute('profil_index');
        } else {
            return $this->render('staff/unavailability.html.twig', [
                'form' => $formHandler->getView()
            ]);
        }
    }

    /**
     * @Route("/staff/unavailabilities/delete/{id}", name="unavailability_delete")
     */
    public function deleteUnavailability(int $id, UnavailabilityHandler $handler)
    {
        $handler->delete($id);
        return $this->redirectToRoute('profil_index');
    }

    /**
     * @Route("/api/unavailabilities", name="api_unavailabilities")
     */
    public function apiUnavailabilities(Request $request ,UnavailabilityRepository $repository)
    {
        $content = json_decode($request->getContent(), true);
        $serializer = SerializerBuilder::create()->build();
        $jsonContent = $serializer->serialize($repository->findAllBetweenDate($content['start'], $content['end']), 'json', SerializationContext::create()->enableMaxDepthChecks());
        return $this->json($jsonContent, 200);
    }
}
