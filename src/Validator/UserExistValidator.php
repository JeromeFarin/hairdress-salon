<?php
namespace App\Validator;

use App\Repository\UserRepository;
use Symfony\Component\Validator\Constraint;
use Symfony\Component\Validator\ConstraintValidator;

class UserExistValidator extends ConstraintValidator
{
    private $userRepository;

    public function __construct(UserRepository $userRepository) {
        $this->userRepository = $userRepository;
    }

    public function validate($value, Constraint $constraint)
    {
        if ($this->userRepository->count(['email' => $value]) == 0 ) {
            $this->context->buildViolation($constraint->message)
                 ->addViolation();
        }
        
    }
}
