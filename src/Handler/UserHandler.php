<?php
namespace App\Handler;

use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;

class UserHandler extends AbstractManagerHandler
{
    protected $manager;

    protected $repository;

    public function __construct(EntityManagerInterface $manager, UserRepository $repository) {
        $this->manager = $manager;
        $this->repository = $repository;
    }
}
