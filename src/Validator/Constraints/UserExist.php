<?php
namespace App\Validator\Constraints;

use App\Validator\UserExistValidator;
use Symfony\Component\Validator\Constraint;

/**
 * @Annotation
 */
class UserExist extends Constraint
{
    public $message = 'User not found';

    public function validatedBy()
    {
        return UserExistValidator::class;
    }
}