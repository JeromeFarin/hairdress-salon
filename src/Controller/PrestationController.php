<?php

namespace App\Controller;

use App\Repository\PrestationRepository;
use JMS\Serializer\SerializationContext;
use JMS\Serializer\SerializerBuilder;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class PrestationController extends AbstractController
{
    /**
     * @Route("/api/prestations", name="api_prestations")
     */
    public function apiPrestation(PrestationRepository $repository)
    {
        $serializer = SerializerBuilder::create()->build();
        $jsonContent = $serializer->serialize($repository->findAll(), 'json', SerializationContext::create()->enableMaxDepthChecks());
        return $this->json($jsonContent, 200);
    }

    /**
     * @Route("/api/prestations/active", name="api_prestations_active")
     */
    public function apiPrestationActive(PrestationRepository $repository)
    {
        $serializer = SerializerBuilder::create()->build();
        $jsonContent = $serializer->serialize($repository->findByActive('1'), 'json', SerializationContext::create()->enableMaxDepthChecks());
        return $this->json($jsonContent, 200);
    }
}
