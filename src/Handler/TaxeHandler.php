<?php
namespace App\Handler;

use App\Repository\TaxeRepository;
use Doctrine\ORM\EntityManagerInterface;

class TaxeHandler extends AbstractManagerHandler
{
    protected $manager;

    protected $repository;

    public function __construct(EntityManagerInterface $manager, TaxeRepository $repository) {
        $this->manager = $manager;
        $this->repository = $repository;
    }
}
