<?php

namespace App\Repository;

use App\Entity\Unavailability;
use App\Entity\User;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method Unavailability|null find($id, $lockMode = null, $lockVersion = null)
 * @method Unavailability|null findOneBy(array $criteria, array $orderBy = null)
 * @method Unavailability[]    findAll()
 * @method Unavailability[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UnavailabilityRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Unavailability::class);
    }

    public function findAllBetweenDate($start, $end)
    {
        return $this->createQueryBuilder('u')
            ->andWhere('u.start >= :start')
            ->andWhere('u.start <= :end')
            ->andWhere('u.end >= :start')
            ->andWhere('u.end <= :end')
            ->setParameter('start', $start)
            ->setParameter('end', $end)
            ->getQuery()
            ->getResult()
        ;
    }
}
