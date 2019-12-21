<?php
namespace App\Handler;

use App\Repository\PrestationRepository;
use Doctrine\ORM\EntityManagerInterface;

class PrestationHandler extends AbstractManagerHandler
{
    protected $manager;

    protected $repository;

    public function __construct(EntityManagerInterface $manager, PrestationRepository $repository) {
        $this->manager = $manager;
        $this->repository = $repository;
    }
}
