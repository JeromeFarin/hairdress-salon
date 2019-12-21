<?php

namespace App\Controller\BackOffice;

use App\Handler\PrestationHandler;
use App\Handler\StatusHandler;
use App\Handler\TaxeHandler;
use App\Handler\UserHandler;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class AdminManagerController extends AbstractController
{
    /**
     * @Route("/admin/api/manager", name="admin_manager")
     */
    public function manager(Request $request, PrestationHandler $prestationHandler, StatusHandler $statusHandler, TaxeHandler $taxeHandler, UserHandler $userHandler)
    {
        $data = json_decode($request->getContent());

        switch ($data->type) {
            case 'prestation':
                $prestationHandler->process($data->value);
                break;
            
            case 'taxe':
                $taxeHandler->process($data->value);
                break;
                
            case 'status':
                $statusHandler->process($data->value);
                break;
                
            case 'user':
                $userHandler->process($data->value);
                break;
        }
        
        return $this->json(true, 200);
    }
}
