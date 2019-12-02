<?php

namespace App\Controller;

use App\Repository\SalonOptionRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class AdminController extends AbstractController
{
    /**
     * @Route("/admin", name="admin_index")
     */
    public function index(SalonOptionRepository $salonOptionRepository)
    {
        $return = [];
        foreach ($salonOptionRepository->findAll() as $value) {
            if ($value->getKey() === 'start_opened') {
                $return['start'] = $value->getValue();
            }
            if ($value->getKey() === 'end_opened') {
                $return['end'] = $value->getValue();
            }
        }
        
        return $this->render('admin/index.html.twig', [
            'opened' => $return,
        ]);
    }
}
