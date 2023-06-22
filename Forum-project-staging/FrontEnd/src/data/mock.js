export const datasUser = {
  email: "mail.adresse@gmail.fr",
  password: "passwordUser"
}
export const datasLoginUser = {
  id : 1,
  email: "mail.adresse@gmail.fr",
  password: "passwordUser",
  token: "yJ0eXAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXxJbtQ"
}
export const datasUser2 = {
  email: "mail.adresse@gmail.com",
  password: "passwordUser"
}
export const datasLoginUser2 = {
  id : 2,
  email: "mail.adresse@gmail.com",
  password: "passwordUser",
  token: "yJ0eXAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXxJbtQ"
}
export const forumDataArray = [ // Dans ce tableau il y aura les donnnées récupérées depuis la base de données crées en plus
  {
    id: 1,
    subject : 'Sujet',
    content : "Bonjour, voilà à quoi correspond mon premier sujet j'aimerai avoir votre avis",
    date : "22/12/2021",
    heure : "14h45",
    idUser: 1
  },
  {
    id: 2,
    subject : 'Sujet',
    content : "Bonjour, voilà à quoi correspond mon premier sujet j'aimerai avoir votre avis",
    date : "23/12/2021",
    heure : "14h45",
    idUser: 2
  },
  {
    id: 3,
    subject : 'Sujet',
    content : "Bonjour, voilà à quoi correspond mon premier sujet j'aimerai avoir votre avis",
    date : "24/12/2021",
    heure : " 14h45",
    idUser: 3
  },
  {
    id:4,
    subject : 'Sujet',
    content : "Bonjour, voilà à quoi correspond mon premier sujet j'aimerai avoir votre avis",
    date : "23/03/2023",
    heure : "17h45",
    idUser: 4
  },
  {
    id:5,
    subject : 'Sujet',
    content : "Bonjour, voilà à quoi correspond mon premier sujet j'aimerai avoir votre avis",
    date : "14/02/2023",
    heure : " 14h45",
    idUser: 5
  }
];
export const forumCommentDataArray = [ // Dans ce tableau il y aura les donnnées récupérées depuis la base de données crées en plus
  {
    id : 1,
    subject : 'Reponse au sujet',
    content : "Bonjour, voilà à quoi correspond mon premier sujet j'aimerai avoir votre avis",
    date : "22/12/2021",
    heure : "14h45",
    idUser: 1, 
    postId:5
  },
  {
    id : 2,
    subject : 'Reponse au sujet',
    content : "Bonjour, voilà à quoi correspond mon premier sujet j'aimerai avoir votre avis",
    date : "23/12/2021",
    heure : "14h45",
    idUser: 2,
    postId:3
  },
  {
    id : 3,
    subject : 'Reponse au sujet',
    content : "Bonjour, voilà à quoi correspond mon premier sujet j'aimerai avoir votre avis",
    date : "24/12/2021",
    heure : " 14h45",
    idUser: 3,
    postId:4
  },
  {
    id : 4,
    subject : 'Reponse au sujet',
    content : "Bonjour, voilà à quoi correspond mon premier sujet j'aimerai avoir votre avis",
    date : "23/03/2023",
    heure : "17h45",
    idUser: 2,
    postId:1
  }
];