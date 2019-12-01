<?php

namespace App\Controller;

use App\Repository\PrestationRepository;
use JMS\Serializer\SerializationContext;
use JMS\Serializer\SerializerBuilder;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class PrestationController extends AbstractController
{
    /**
     * @Route("/api/prestations", name="api_prestations")
     */
    public function apiPrestation(Request $request, PrestationRepository $repository)
    {
        $serializer = SerializerBuilder::create()->build();
        $jsonContent = $serializer->serialize($repository->findAll(), 'json', SerializationContext::create()->enableMaxDepthChecks());
        return $this->json($jsonContent, 200);
    }
}
