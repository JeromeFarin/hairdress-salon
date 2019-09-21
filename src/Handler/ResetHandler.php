<?php
namespace App\Handler;

use Doctrine\ORM\EntityManagerInterface;

class ResetHandler extends AbstractFormHandler
{
    protected $manager;

    public function __construct(EntityManagerInterface $manager) {
        $this->manager = $manager;
    }

    public function process($data)
    {
        if ($data->getCode() == null) {
            $data->setLastUpdate(new \DateTime());
        } else {
            $data->setCode(null);
        }
        
        $this->manager->persist($data);
        $this->manager->flush();
    }
}
