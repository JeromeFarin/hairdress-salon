<?php

namespace App\Form;

use App\Validator\Constraints\UserExist;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\FormBuilderInterface;

class ForgotType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('email', EmailType::class, [
                'constraints' => [
                    new UserExist()
                ]
            ])
            ->add('submit', SubmitType::class, [
                'label' => 'Reset'
            ])
        ;
    }
}
