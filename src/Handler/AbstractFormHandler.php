<?php
namespace App\Handler;

use Symfony\Component\Form\FormFactoryInterface;
use Symfony\Component\HttpFoundation\Request;

abstract class AbstractFormHandler
{
    private $formFactory;

    abstract public function process($data);
    
    /**
     * @required
     *
     * @param FormFactoryInterface $formFactory
     * @return void
     */
    public function setFormFactory(FormFactoryInterface $formFactory)
    {
        $this->formFactory = $formFactory;
    }
    
    public function formHandle(Request $request, string $type, $data = null)
    {
        $this->form = $this->formFactory->create($type,$data)->handleRequest($request);

        if ($this->form->isSubmitted() && $this->form->isValid()) {
            $this->process($data);
            return true;
        }

        return false;
    }



    public function getView()
    {
        return $this->form->createView();
    }

    public function getData()
    {
        return $this->form->getData();
    }
}

