<?php

namespace App\Controller\BackOffice;

use App\Repository\StatusRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class AdminStatusController extends AbstractController
{
    private $manager;

    private $statusRepository;

    public function __construct(EntityManagerInterface $manager, StatusRepository $statusRepository) {
        $this->manager = $manager;
        $this->statusRepository = $statusRepository;
    }

    /**
     * @Route("/admin/status", name="admin_status")
     */
    public function status()
    {
        return $this->render('admin/status.html.twig', []);
    }

    /**
     * @Route("/admin/status/update", name="admin_status_update")
     */
    public function statusUpdate(Request $request)
    {
        dd($request->getContent());

        return $this->redirectToRoute('admin_status');
    }

    /**
     * @Route("/admin/status/new", name="admin_status_new")
     */
    public function statusNew(Request $request)
    {
        dd($request->getContent());
    }
}
