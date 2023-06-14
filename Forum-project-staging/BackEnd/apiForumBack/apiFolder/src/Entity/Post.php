<?php
declare(strict_types=1);
namespace App\Entity;

use App\Repository\PostRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PostRepository::class)]
#[ORM\Table(name: 'post')]
class Post
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\JoinColumn(name:"user_id", referencedColumnName:"id")]
    #[ORM\ManyToOne(targetEntity:"User")]
    #[ORM\Column(nullable: true)]
    private ?int $user_id = null;

    #[ORM\Column(nullable: true)]
    private $name;

    #[ORM\Column(nullable: true)]
    private $content;

    #[ORM\Column(nullable: true)]
    private $date;
    #[ORM\Column(nullable: true)]
    private $type;
    public function getId(): ?int
    {
        return $this->id;
    }
    public function getDate(): ?string
    {
        return $this->date;
    }

    public function setDate(?string $date): self
    {
        $this->date = $date;

        return $this;
    }
    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(?string $name): self
    {
        $this->name = $name;

        return $this;
    }
    public function getContent(): ?string
    {
        return $this->content;
    }

    public function setContent(?string $content): self
    {
        $this->content = $content;

        return $this;
    }

    public function getType(): ?string
    {
        return $this->type;
    }

    public function setType(?string $type): self
    {
        $this->type = $type;

        return $this;
    }
    public function getUserId(): ?int
    {
        return $this->user_id;
    }

    public function setUserId(?int $user_id): self
    {
        $this->user_id = $user_id;
        return $this;
    }
}
