<?php
namespace App\Handler;

use App\Repository\UnavailabilityRepository;
use Doctrine\ORM\EntityManagerInterface;

class UnavailabilityHandler extends AbstractFormHandler
{
    protected $manager;

    protected $repository;

    public function __construct(EntityManagerInterface $manager, UnavailabilityRepository $repository) {
        $this->manager = $manager;
        $this->repository = $repository;
    }

    public function process($data)
    {
        $this->manager->persist($data);
        $this->manager->flush();
    }

    public function delete(int $id): bool
    {
        $unavailability = $this->repository->find($id);

        if ($unavailability != null) {
            $this->manager->remove($unavailability);
            $this->manager->flush();
            return true;
        }

        return false;
    }
}
