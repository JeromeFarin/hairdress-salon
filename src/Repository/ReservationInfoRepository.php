<?php

namespace App\Repository;

use App\Entity\ReservationInfo;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method ReservationInfo|null find($id, $lockMode = null, $lockVersion = null)
 * @method ReservationInfo|null findOneBy(array $criteria, array $orderBy = null)
 * @method ReservationInfo[]    findAll()
 * @method ReservationInfo[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ReservationInfoRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ReservationInfo::class);
    }

    // /**
    //  * @return ReservationInfo[] Returns an array of ReservationInfo objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('r')
            ->andWhere('r.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('r.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?ReservationInfo
    {
        return $this->createQueryBuilder('r')
            ->andWhere('r.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
