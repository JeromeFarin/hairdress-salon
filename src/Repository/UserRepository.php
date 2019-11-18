<?php

namespace App\Repository;

use App\Entity\User;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\Query\ResultSetMappingBuilder;
use Symfony\Bridge\Doctrine\RegistryInterface;


/**
 * @method User|null find($id, $lockMode = null, $lockVersion = null)
 * @method User|null findOneBy(array $criteria, array $orderBy = null)
 * @method User[]    findAll()
 * @method User[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UserRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, User::class);
    }


    public function uploadAvatar(UploadedFile $file, User $user)
    {
        $fileName = $user->getId() . '.' . $file->guessExtension();
        $file->move(
            '/img/avatar',
            $fileName
        );

        return $fileName;
    }

    public function getStaffs()
    {
        return $this->createQueryBuilder('u')
            ->where("JSON_SEARCH(u.roles, 'all', :search) IS NOT NULL")
            ->setParameter('search', 'ROLE_STAFF')
            ->getQuery()
            ->getResult()
        ;
    }

    public function getStaffsAPI()
    {
        return $this->_em->createQueryBuilder()
            ->select('u.id, u.firstName as first_name, u.color, \'true\' as selected')
            ->from(User::class,'u')
            ->where("JSON_SEARCH(u.roles, 'all', :search) IS NOT NULL")
            ->setParameter('search', 'ROLE_STAFF')
            ->getQuery()
            ->getResult()
        ;
    }
}
