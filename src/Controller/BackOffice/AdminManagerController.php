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
                $prestationHandler->process($data);
                break;
            
            case 'taxe':
                $taxeHandler->process($data);
                break;
                
            case 'status':
                $statusHandler->process($data);
                break;
                
            case 'user':
                $userHandler->process($data);
                break;
        }
        
        return $this->json(true, 200);
    }

    /**
     * @Route("/admin/api/user/roles", name="admin_user_roles")
     */
    public function userRoles(Request $request, UserHandler $userHandler)
    {
        $data = json_decode($request->getContent());

        $userHandler->updateRoles($data);
        
        return $this->json(true, 200);
    }
}
