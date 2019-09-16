<?php
namespace App\Form;

use Symfony\Component\HttpFoundation\Request;

class FormHandler extends AbstractFormHandler
{
    protected $form;

    public function formHandle(Request $request, string $type, $data = null)
    {
        $this->form = $this->createForm($type,$data)->handleRequest($request);

        if ($this->form->isSubmitted() && $this->form->isValid()) {
            return true;
        }

        return false;
    }
}

