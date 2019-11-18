<?php

namespace App\Controller;

use App\Repository\UnavailabilityRepository;
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
        dd($repository->findAllBetweenDate($content['start'], $content['end']));
        return $this->json($repository->findAllBetweenDate('2019-11-18', '2019-11-23'));
    }
}
