<?php
namespace App\Form;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;

abstract class AbstractFormHandler extends AbstractController
{
    abstract public function formHandle(Request $request, string $type, $data = null);

    public function getView()
    {
        return $this->form->createView();
    }

    public function getData()
    {
        return $this->form->getData();
    }
}

