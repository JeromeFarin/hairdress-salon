<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use App\Entity\User;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Faker\Factory;

class UserFixtures extends Fixture
{
    private $encoder;

    public function __construct(UserPasswordEncoderInterface $encoder) {
        $this->encoder = $encoder;
    }

    public function load(ObjectManager $manager)
    {
        $faker = Factory::create('fr_FR');

        $user = new User();
        $user->setEmail('j.farin38@gmail.com')
             ->setRoles(['ROLE_ADMIN'])
             ->setPassword($this->encoder->encodePassword($user, '123'))
             ->setGender(1)
             ->setFirstName('Jérôme')
             ->setLastName('Farin')
             ->setPhone('0644079372');
        $manager->persist($user);

        for ($i=1; $i < 10; $i++) { 
            $user = new User();
            $user->setEmail($faker->unique()->email)
                 ->setRoles([$faker->randomElement(['ROLE_USER','ROLE_STAFF'])])
                 ->setPassword($this->encoder->encodePassword($user, $faker->password))
                 ->setGender($faker->numberBetween(1,2))
                 ->setFirstName(($user->getGender() == 1) ? $faker->firstNameMale : $faker->firstNameFemale )
                 ->setLastName($faker->lastName)
                 ->setAvatar($faker->word . '.' . $faker->fileExtension)
                 ->setPhone($faker->phoneNumber)
                 ->setScore(($user->getRoles() == ['ROLE_USER']) ? null : $faker->numberBetween(1,5));
            $manager->persist($user);
        }        

        $manager->flush();
    }
}
