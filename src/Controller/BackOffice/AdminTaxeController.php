<?php

namespace App\Controller\BackOffice;

use App\Repository\TaxeRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class AdminTaxeController extends AbstractController
{
    private $manager;

    private $taxeRepository;

    public function __construct(EntityManagerInterface $manager, TaxeRepository $taxeRepository) {
        $this->manager = $manager;
        $this->taxeRepository = $taxeRepository;
    }

    /**
     * @Route("/admin/taxes", name="admin_taxes")
     */
    public function taxe()
    {
        preg_match('/([a-z]*)$/i',$_SERVER['REQUEST_URI'],$matches);
        return $this->render('admin/taxes.html.twig', [
            'type' => $matches[0]
        ]);
    }

    /**
     * @Route("/admin/taxe/update", name="admin_taxe_update")
     */
    public function taxeUpdate(Request $request)
    {
        dd($request->getContent());

        return $this->redirectToRoute('admin_taxe');
    }

    /**
     * @Route("/admin/taxe/new", name="admin_taxe_new")
     */
    public function taxeNew(Request $request)
    {
        dd($request->getContent());
    }
}
