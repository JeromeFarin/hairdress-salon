<?php

namespace App\Repository;

use App\Entity\Unavailability;
use App\Entity\User;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method Unavailability|null find($id, $lockMode = null, $lockVersion = null)
 * @method Unavailability|null findOneBy(array $criteria, array $orderBy = null)
 * @method Unavailability[]    findAll()
 * @method Unavailability[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UnavailabilityRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, Unavailability::class);
    }

    public function findAllBetweenDate($start, $end)
    {
        return $this->_em->createQueryBuilder()
            ->select('u.id, s.id as staff, u.start, u.end')
            ->from(Unavailability::class,'u')
            ->join(User::class,'s','WITH', 's.id = u.staff')
            ->andWhere('u.start >= :start')
            ->andWhere('u.start <= :end')
            ->andWhere('u.end >= :start')
            ->andWhere('u.end <= :end')
            ->setParameter('start', $start)
            ->setParameter('end', $end)
            ->getQuery()
            ->getResult()
        ;

        // return $this->createQueryBuilder('u')
        //     ->andWhere('u.start >= :start')
        //     ->andWhere('u.start <= :end')
        //     ->andWhere('u.end >= :start')
        //     ->andWhere('u.end <= :end')
        //     ->setParameter('start', $start)
        //     ->setParameter('end', $end)
        //     ->getQuery()
        //     ->getResult()
        // ;
    }

    // /**
    //  * @return Unavailability[] Returns an array of Unavailability objects
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
    public function findOneBySomeField($value): ?Unavailability
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
