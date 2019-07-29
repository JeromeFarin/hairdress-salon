<?php

namespace App\DataFixtures;

use Doctrine\Common\Persistence\ObjectManager;
use App\Entity\User;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Faker\Factory;

class UserFixtures extends AppFixtures
{
    private $encoder;
    private $faker;
    protected $manager;
    protected $countUser = 1;
    protected $countStaff = 1;

    public function __construct(UserPasswordEncoderInterface $encoder) {
        $this->encoder = $encoder;
        $this->faker = Factory::create('fr_FR');
    }

    public function load(ObjectManager $manager)
    {
        $this->manager = $manager;
        $user = new User();
        $user->setEmail('j.farin38@gmail.com')
             ->setRoles(['ROLE_ADMIN'])
             ->setPassword($this->encoder->encodePassword($user, '123'))
             ->setGender(1)
             ->setFirstName('Jérôme')
             ->setLastName('Farin')
             ->setPhone('0644079372');
        $manager->persist($user);  

        for ($i=0; $i < 10; $i++) { 
            $user = new User();

            $user->setEmail(('email+'.$i.'@email.com'))
                 ->setRoles([$this->faker->randomElement(['ROLE_STAFF','ROLE_CLIENT'])])
                 ->setPassword($this->encoder->encodePassword($user, 'password'))
                 ->setGender($this->faker->numberBetween(1,2))
                 ->setFirstName(($user->getGender() == 1) ? $this->faker->firstNameMale : $this->faker->firstNameFemale )
                 ->setLastName($this->faker->lastName)
                 ->setAvatar($this->faker->word . '.' . $this->faker->fileExtension)
                 ->setPhone($this->faker->phoneNumber);

            $manager->persist($user);

            if (in_array('ROLE_STAFF',$user->getRoles())) {
                $this->addReference('staff_'.$this->countStaff, $user);
                $this->countStaff = $this->countStaff + 1;
            } else {
                $this->addReference('client_'.$this->countUser, $user);
                $this->countUser = $this->countUser + 1;
            }
        }
        
        $manager->flush();
    }
}
