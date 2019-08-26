<?php

namespace App\Tests\Controller;

use App\Entity\User;
use App\Form\UserType;
use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;
use Symfony\Component\HttpFoundation\Request;

class SecurityControllerTest extends WebTestCase
{

    public function testRegister()
    {
        $client = static::createClient();

        $user = new User();

        $crawler = $client->request('GET', '/register', [$user]);

        // $form = $crawler->selectButton('user_submit')->form();
        $form = $crawler->filter('form[name=user]')->form([
            "user[firstName]" => "jerome",
            "user[lastName]" => "farin",
            "user[email]" => "emailte@gmail.com",
            "user[password]" => "123",
            "user[gender]" => "1",
            "user[phone]" => "644079372"
        ]);

        $crawler = $client->submit($form);

        // $this->assertTrue($client->getResponse()->isSuccessful());

        echo $client->getResponse()->getContent();
        $this->assertEquals(302, $client->getResponse()->getStatusCode());
    }
}
