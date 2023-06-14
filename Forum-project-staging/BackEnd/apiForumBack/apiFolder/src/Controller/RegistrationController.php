<?php

namespace App\Controller;

use App\Entity\User;
use App\Entity\Post;
use App\Entity\Comments;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;
use Lexik\Bundle\JWTAuthenticationBundle\Services\JWTTokenManagerInterface;
use Doctrine\Persistence\ManagerRegistry;
class RegistrationController extends AbstractController
{
    private $passwordHasher;
    private $jwtManager;
    public function __construct(private ManagerRegistry $doctrine, UserPasswordHasherInterface $passwordHasher, JWTTokenManagerInterface $jwtManager) {
        $this->passwordHasher = $passwordHasher;
        $this->jwtManager = $jwtManager;
    }

    function generateToken(User $user): string
    {
        return $this->jwtManager->create($user);
    }

    #[Route(path:'/register', name: 'app_register', methods: ['POST', 'GET'])]
    public function register(Request $request, UserPasswordHasherInterface $passwordHasher, JWTTokenManagerInterface $jwtManager):JsonResponse
    {
        $data = json_decode($request->getContent(), true);
        $plainPassword = $data['password'];
        $user = new User();
        $user->setEmail($data['email']);
        $user->setRoles(['USER']);
        // Encoder le mot de passe
        $encodedPassword = $this->passwordHasher->hashPassword(
            $user,
            $plainPassword
        );
        $user->setPassword($encodedPassword); // enregistrer le password seulement une fois crypté

        $entityManager = $this->doctrine->getManager();
        $entityManager->persist($user);
        $entityManager->flush();
        
        // Récupérer l'utilisateur depuis la base de données
        $userFindForTokenReceive = $this->doctrine->getRepository(User::class)->findOneBy(['email' => $data['email']]);

        // Générer le token
        $token = $this->generateToken($userFindForTokenReceive);

        return new JsonResponse([
            'token'=>$token,
            'userId'=>$user->getId()
        ]);
    }
    
    public const LOGIN_ROUTE = 'app_login';

    #[Route(path: '/login', name: self::LOGIN_ROUTE, methods: ['POST','GET'])]
    public function login(Request $request, AuthenticationUtils $authenticationUtils): jsonResponse
    {
        // get the login error if there is one
        $error = $authenticationUtils->getLastAuthenticationError();
        // last username entered by the user
        $lastUsername = $authenticationUtils->getLastUsername();
        $data = json_decode($request->getContent(), true);
        // Récupérer l'utilisateur depuis la base de données


        $userFindForTokenReceive = $this->doctrine->getRepository(User::class)->findOneBy(
            ['email' => $data['email']]
        );
        // var_dump($userFindForTokenReceive);
        $userId = $userFindForTokenReceive->getId();
        // Générer le token
        $token = $this->generateToken($userFindForTokenReceive);
        return $this->json(
            (object)[
                'error' => $error,
                'lastUserName'=> $lastUsername,
                'token'=> $token,
                'userId'=> $userId
            ]
        );
    }
    
    #[Route(path:'/deleteAccount', name: 'app_delete_account', methods: ['DELETE'])]
    public function deleteAccount(Request $request):JsonResponse
    {
        $data = json_decode($request->getContent(), true);

        // Récupérer l'utilisateur depuis la base de données
        $user = $this->doctrine->getRepository(User::class)->findOneBy(['id' => $data]);
        $postsUser = $this->doctrine->getRepository(Post::class)->findOneBy(['user_id' => $data]);
        $commentsUser = $this->doctrine->getRepository(Comments::class)->findOneBy(['user_id' => $data]);
      
        $entityManager = $this->doctrine->getManager();
        $entityManager->remove($user);
        //si le résultat de l'ensemble des posts est un tableau alors on pour chaques element les supprimer
        if (is_array($postsUser)) {
            foreach ($postsUser as $key => $element) {
                $entityManager->remove($element);
            }
        }else {
            //sinon on va juste supprimer l'element
            $entityManager->remove($postsUser);
        }

        //si le résultat de l'ensemble des commentaires est un tableau alors on pour chaques element les supprimer
        if (is_array($commentsUser)) {
            foreach ($commentsUser as $key => $element) {
                $entityManager->remove($element);
            }
        }else {
            //sinon on va juste supprimer l'element
            $entityManager->remove($commentsUser);
        }

        $entityManager->flush();
    
        return new JsonResponse([
            'status'=>'Compte supprimé',
        ]);
    }

    #[Route(path: '/getAllUsers', name: 'app_get_all_users', methods: ['GET'])]
    public function getAllUsers(Request $request): JsonResponse
    {
        //TODO: Implémenter une fonction qui va permettre de récupérer tous les posts
        //récupérer la valeur de typeForum de l'url pour faire une recherche comparative avec les types se trouvant dans la bdd
        $allUsers = $this->doctrine->getRepository(User::class)->findAll();

        return $this->json(
            (object)[
                'data' => $allUsers,
            ]
        );
    }
}
