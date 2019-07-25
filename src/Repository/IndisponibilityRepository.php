<?php

namespace App\Repository;

use App\Entity\Indisponibility;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method Indisponibility|null find($id, $lockMode = null, $lockVersion = null)
 * @method Indisponibility|null findOneBy(array $criteria, array $orderBy = null)
 * @method Indisponibility[]    findAll()
 * @method Indisponibility[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class IndisponibilityRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, Indisponibility::class);
    }

    // /**
    //  * @return Indisponibility[] Returns an array of Indisponibility objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('i')
            ->andWhere('i.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('i.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Indisponibility
    {
        return $this->createQueryBuilder('i')
            ->andWhere('i.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
