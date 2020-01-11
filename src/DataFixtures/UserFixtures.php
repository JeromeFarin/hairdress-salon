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

            $user->setEmail(('email_client_'.$i.'@email.com'))
                 ->setRoles(['ROLE_CLIENT'])
                 ->setPassword($this->encoder->encodePassword($user, 'password'))
                 ->setGender($this->faker->numberBetween(1,2))
                 ->setFirstName(($user->getGender() == 'Male') ? $this->faker->firstNameMale : $this->faker->firstNameFemale )
                 ->setLastName($this->faker->lastName)
                 ->setPhone($this->faker->phoneNumber)
                 ->setBirthday($this->faker->dateTimeBetween('-90 years','-15 years'));
            

            $manager->persist($user);

            $this->addReference('client_'.$i, $user);
        }

        for ($j=0; $j < 3; $j++) { 
            $user = new User();

            $user->setEmail(('email_staff'.$j.'@email.com'))
                 ->setRoles(['ROLE_STAFF'])
                 ->setPassword($this->encoder->encodePassword($user, 'password'))
                 ->setGender($this->faker->numberBetween(1,2))
                 ->setFirstName(($user->getGender() == 'Male') ? $this->faker->firstNameMale : $this->faker->firstNameFemale )
                 ->setLastName($this->faker->lastName)
                 ->setPhone($this->faker->phoneNumber)
                 ->setBirthday($this->faker->dateTimeBetween('-90 years','-18 years'))
                 ->setHireDate($this->faker->dateTimeBetween(date_add($user->getBirthday(), date_interval_create_from_date_string('18 years'))))
                 ->setColor($this->faker->hexcolor())
            ;

            $manager->persist($user);

            $this->addReference('staff_'.$j, $user);
        }
        
        $manager->flush();
    }
}
