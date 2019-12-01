<?php

namespace App\Controller;

use App\Handler\ReservationHandler;
use App\Repository\ReservationRepository;
use JMS\Serializer\SerializationContext;
use JMS\Serializer\SerializerBuilder;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class ReservationController extends AbstractController
{
    /**
     * @Route("/reservation", name="reservation_index")
     */
    public function index()
    {
        return $this->render('reservation/index.html.twig', [
            'controller_name' => 'ReservationController',
        ]);
    }

    /**
     * @Route("/api/reservations", name="api_reservations")
     */
    public function apiReservations(Request $request ,ReservationRepository $repository)
    {
        $content = json_decode($request->getContent(), true);
        $serializer = SerializerBuilder::create()->build();
        $jsonContent = $serializer->serialize($repository->findAllBetweenDate($content['start'], $content['end']), 'json', SerializationContext::create()->enableMaxDepthChecks());
        return $this->json($jsonContent, 200);
    }

    /**
     * @Route("/api/reserve", name="api_reserve")
     */
    public function apiReserve(Request $request, ReservationHandler $handler)
    {
        return $this->json($handler->reserve(json_decode($request->getContent(), true)), 201);
    }
}
