<?php
namespace App\Handler;

use App\Repository\StatusRepository;
use Doctrine\ORM\EntityManagerInterface;

class StatusHandler extends AbstractManagerHandler
{
    protected $manager;

    protected $repository;

    public function __construct(EntityManagerInterface $manager, StatusRepository $repository) {
        $this->manager = $manager;
        $this->repository = $repository;
    }
}
