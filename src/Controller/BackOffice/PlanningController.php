<?php

namespace App\Controller\BackOffice;

use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class PlanningController extends AbstractController
{
    /**
     * @Route("/planning", name="planning")
     */
    public function manager()
    {
        return $this->render('planning/index.html.twig',[]);
    }
}
