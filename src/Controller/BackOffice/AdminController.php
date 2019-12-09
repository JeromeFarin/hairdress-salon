<?php

namespace App\Controller\BackOffice;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class AdminController extends AbstractController
{
    /**
     * @Route("/admin/manage/add/{entity}", name="admin_manage_add")
     */
    public function add(Request $request, $entity)
    {
        dd($request->getContent(), $entity);
        // return $this->render('admin/prestations.html.twig', []);
    }
    
    /**
     * @Route("/admin/manage/update/{entity}", name="admin_manage_update")
     */
    public function update(Request $request, $entity)
    {
        dd($request->getContent(), $entity);
        // return $this->render('admin/prestations.html.twig', []);
    }
}
