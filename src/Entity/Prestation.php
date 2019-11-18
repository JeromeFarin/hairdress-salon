<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiResource;

/**
 * @ApiResource()
 * @ORM\Entity(repositoryClass="App\Repository\PrestationRepository")
 */
class Prestation
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $name;

    /**
     * @ORM\Column(type="integer")
     */
    private $makeTime;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $price;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\ReservationInfo", mappedBy="prestation")
     */
    private $reservationInfos;

    public function __construct()
    {
        $this->reservationInfos = new ArrayCollection();
    }

    public function setId(int $id): self
    {
        $this->id = $id;

        return $this;
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getMakeTime(): ?int
    {
        return $this->makeTime;
    }

    public function setMakeTime(int $makeTime): self
    {
        $this->makeTime = $makeTime;

        return $this;
    }

    public function getPrice(): ?string
    {
        return $this->price;
    }

    public function setPrice(string $price): self
    {
        $this->price = $price;

        return $this;
    }

    /**
     * @return Collection|ReservationInfo[]
     */
    public function getReservationInfos(): Collection
    {
        return $this->reservationInfos;
    }

    public function addReservationInfo(ReservationInfo $reservationInfo): self
    {
        if (!$this->reservationInfos->contains($reservationInfo)) {
            $this->reservationInfos[] = $reservationInfo;
            $reservationInfo->setPrestation($this);
        }

        return $this;
    }

    public function removeReservationInfo(ReservationInfo $reservationInfo): self
    {
        if ($this->reservationInfos->contains($reservationInfo)) {
            $this->reservationInfos->removeElement($reservationInfo);
            // set the owning side to null (unless already changed)
            if ($reservationInfo->getPrestation() === $this) {
                $reservationInfo->setPrestation(null);
            }
        }

        return $this;
    }
}
