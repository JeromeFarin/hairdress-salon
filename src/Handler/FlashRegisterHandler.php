<?php
namespace App\Handler;

use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;

class FlashRegisterHandler
{
    protected $manager;

    public function __construct(EntityManagerInterface $manager) {
        $this->manager = $manager;
    }

    public function createUser($data): User
    {
        $user = new User();

        $user->setRoles(['ROLE_FLASH_CLIENT'])
             ->setPassword('123')
             ->setBirthday(new \DateTime())
             ->setFirstName($data['first_name'])
             ->setLastName($data['last_name'])
             ->setGender($data['gender'])
             ->setPhone($data['phone'])
             ->setEmail($data['email'])
        ;

        $this->manager->persist($user);
        $this->manager->flush();
        
        return $user;
    }
}
