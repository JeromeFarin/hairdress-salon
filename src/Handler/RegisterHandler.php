<?php
namespace App\Handler;

use Doctrine\ORM\EntityManagerInterface;

class RegisterHandler extends AbstractFormHandler
{
    protected $manager;

    public function __construct(EntityManagerInterface $manager) {
        $this->manager = $manager;
    }

    public function process($data)
    {
        $this->manager->persist($data);
        $this->manager->flush();
    }
}
