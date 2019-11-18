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

    public function __construct(UserPasswordEncoderInterface $encoder) {
        $this->encoder = $encoder;
        $this->faker = Factory::create('fr_FR');
    }

    public function load(ObjectManager $manager)
    {
        for ($i=0; $i < 10; $i++) { 
            $user = new User();

            $user->setEmail(('email+'.$i.'@email.com'))
                 ->setRoles(['ROLE_CLIENT'])
                 ->setPassword($this->encoder->encodePassword($user, 'password'))
                 ->setGender($this->faker->numberBetween(1,2))
                 ->setFirstName(($user->getGender() == 'Male') ? $this->faker->firstNameMale : $this->faker->firstNameFemale )
                 ->setLastName($this->faker->lastName)
                 ->setPhone($this->faker->phoneNumber)
                 ->setBirthday($this->faker->dateTime());
            

            $manager->persist($user);

            $this->addReference('client_'.$i, $user);
        }

        for ($j=0; $j < 3; $j++) { 
            $user = new User();

            $user->setEmail(('email+'.$j.$j.'@email.com'))
                 ->setRoles(['ROLE_STAFF'])
                 ->setPassword($this->encoder->encodePassword($user, 'password'))
                 ->setGender($this->faker->numberBetween(1,2))
                 ->setFirstName(($user->getGender() == 'Male') ? $this->faker->firstNameMale : $this->faker->firstNameFemale )
                 ->setLastName($this->faker->lastName)
                 ->setPhone($this->faker->phoneNumber)
                 ->setBirthday($this->faker->dateTime())
                 ->setHireDate($this->faker->dateTime())
                 ->setColor($this->faker->rgbcolor)
            ;

            $manager->persist($user);

            $this->addReference('staff_'.$j, $user);
        }
        
        $manager->flush();
    }
}
