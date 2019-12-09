<?php

namespace App\Controller;

use App\Repository\SalonOptionRepository;
use App\Repository\StatusRepository;
use App\Repository\TaxeRepository;
use JMS\Serializer\SerializationContext;
use JMS\Serializer\SerializerBuilder;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class AdminController extends AbstractController
{
    /**
     * @Route("/admin", name="admin_index")
     */
    public function index(SalonOptionRepository $salonOptionRepository)
    {
        return $this->render('admin/index.html.twig', []);
    }

    /**
     * @Route("/api/status", name="api_status")
     */
    public function status(StatusRepository $repository)
    {
        $serializer = SerializerBuilder::create()->build();
        $jsonContent = $serializer->serialize($repository->findAll(), 'json', SerializationContext::create()->enableMaxDepthChecks());
        return $this->json($jsonContent, 200);
    }

    /**
     * @Route("/api/taxes", name="api_taxes")
     */
    public function taxes(TaxeRepository $repository)
    {
        $serializer = SerializerBuilder::create()->build();
        $jsonContent = $serializer->serialize($repository->findAll(), 'json', SerializationContext::create()->enableMaxDepthChecks());
        return $this->json($jsonContent, 200);
    }
}
