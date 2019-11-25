<?php
namespace App\Handler;

use Doctrine\ORM\EntityManagerInterface;

class ProfilEditHandler extends AbstractFormHandler
{
    protected $manager;

    public function __construct(EntityManagerInterface $manager) {
        $this->manager = $manager;
    }

    public function process($data)
    {
        $data->setLastUpdate(new \DateTime());
        
        $this->manager->persist($data);
        $this->manager->flush();
    }
}
