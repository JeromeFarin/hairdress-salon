<?php

namespace App\Controller;

use App\Repository\UnavailabilityRepository;
use JMS\Serializer\SerializationContext;
use JMS\Serializer\SerializerBuilder;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class UnavailabilityController extends AbstractController
{
    /**
     * @Route("/api/unavailabilities", name="api_unavailabilities")
     */
    public function apiUnavailabilities(Request $request ,UnavailabilityRepository $repository)
    {
        $content = json_decode($request->getContent(), true);
        $serializer = SerializerBuilder::create()->build();
        $jsonContent = $serializer->serialize($repository->findAllBetweenDate('2019-11-18', '2019-11-23'), 'json', SerializationContext::create()->enableMaxDepthChecks());
        return $this->json($jsonContent);
    }
}
