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
        if ($user->getPlainPassword() != null) {
            $user->setPassword($this->encoder->encodePassword($user, $user->getPlainPassword()));
        }
    }
    
    public function preUpdate(User $user)
    {
        if ($user->getPlainPassword() != null) {
            $user->setPassword($this->encoder->encodePassword($user, $user->getPlainPassword()));
        }
    }
}
