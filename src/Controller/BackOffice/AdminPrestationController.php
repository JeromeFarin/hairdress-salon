<?php

namespace App\Controller\BackOffice;

use App\Repository\PrestationRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class AdminPrestationController extends AbstractController
{
    private $manager;

    private $prestationRepository;

    public function __construct(EntityManagerInterface $manager, PrestationRepository $prestationRepository) {
        $this->manager = $manager;
        $this->prestationRepository = $prestationRepository;
    }

    /**
     * @Route("/admin/prestations", name="admin_prestations")
     */
    public function prestations()
    {
        return $this->render('admin/prestations.html.twig', []);
    }

    /**
     * @Route("/admin/prestation/update", name="admin_prestation_update")
     */
    public function prestationUpdate(Request $request)
    {
        dd($request->getContent());
        // $prestation = $this->prestationRepository->find($id);

        dd($prestation);

        return $this->redirectToRoute('admin_prestations');
    }

    /**
     * @Route("/admin/prestation/new", name="admin_prestation_new")
     */
    public function prestationNew(Request $request)
    {
        dd($request->getContent());

        dd($prestation);

        return $this->redirectToRoute('admin_prestations');
    }
}
