<?php
namespace App\Handler;

abstract class AbstractManagerHandler
{
    public function process($data)
    {
        foreach ($data->value as $key => $value) {
            if ($key === 'new') {
                $entity = '\App\Entity\\'.$data->type;
                $entity = new $entity;
            } else {
                $entity = $this->repository->find($key);
            }
            foreach ($value as $key => $value) {
                $method = 'set'.str_replace('_','',$key);
                if (in_array($key, ['make_time','start','end','hire_date'])) {
                    $entity->$method(new \DateTime($value));
                } else {
                    $entity->$method($value);
                }
            }
            $this->manager->persist($entity);
            $this->manager->flush();
        }
    }
}

