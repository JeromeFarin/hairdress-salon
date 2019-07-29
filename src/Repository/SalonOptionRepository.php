<?php

namespace App\Repository;

use App\Entity\SalonOption;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method SalonOption|null find($id, $lockMode = null, $lockVersion = null)
 * @method SalonOption|null findOneBy(array $criteria, array $orderBy = null)
 * @method SalonOption[]    findAll()
 * @method SalonOption[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class SalonOptionRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, SalonOption::class);
    }

    // /**
    //  * @return SalonOption[] Returns an array of SalonOption objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('o')
            ->andWhere('o.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('o.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?SalonOption
    {
        return $this->createQueryBuilder('o')
            ->andWhere('o.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
