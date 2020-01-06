<?php

namespace App\Controller\BackOffice;

use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class RunnerController extends AbstractController
{
    /**
     * @Route("/runner", name="runner")
     */
    public function manager()
    {
        return $this->render('runner/index.html.twig',[]);
    }
}
