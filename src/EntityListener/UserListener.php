<?php

namespace App\EntityListener;

use App\Entity\User;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class UserListener
{
    private $encoder;

    public function __construct(UserPasswordEncoderInterface $encoder) {
        $this->encoder = $encoder;
    }

    public function prePersist(User $user)
    {
        $this->encodePassword($user);
    }
    
    public function preUpdate(User $user)
    {
        $this->encodePassword($user);
    }

    private function encodePassword(User $user)
    {
        if ($user->getPlainPassword() != null) {
            $user->setPassword($this->encoder->encodePassword($user, $user->getPlainPassword()));
        }

        return $user;
    }
}
