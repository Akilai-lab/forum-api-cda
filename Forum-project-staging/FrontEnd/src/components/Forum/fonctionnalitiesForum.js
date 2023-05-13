// Afficher tous les posts
export function getAllPosts(arrayPost) {
    //afficher les données en fonction du forum
    let typeForum = document.querySelector(".containerp span").textContent.replaceAll(' ', '_');
    fetch('http://localhost:8081/getAllPosts/'+typeForum+'', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + sessionStorage.getItem('token')
        }
    })
    .then(response => {
        response.json()
        .then((res)=>{
            console.log(res);
            return arrayPost(res.data);
        })
        .catch((err)=>console.log(err));
    })
    .catch(error => console.error(error));
};

// Afficher tous les commentaires
export function getAllComments(arrayComments) {

    fetch('http://localhost:8081/getAllComments', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + sessionStorage.getItem('token')
        }
    })
    .then(response => {
        response.json()
        .then((res)=>{return arrayComments(res.data)})
        .catch((err)=>console.log(err));
    })
    .catch(error => console.error(error));
}

// Ajouter un post  
export function addAPost(subject, content){
    //rajouter sur quel forum afficher le commentaire
    let typeForum = document.querySelector(".containerp span").textContent.replaceAll(' ', '_');
    const data = {
        subject : subject,
        contenu : content,
        date: (new Date()).toLocaleDateString(),
        typeForum: typeForum,
        userId: sessionStorage.getItem('userId')
        // userId: Number(sessionStorage.getItem('userId'))
    }
    fetch('http://localhost:8081/addPost', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + sessionStorage.getItem('token')
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        response.json()
        .then((res)=>{console.log(res)})
        .catch((err)=>console.log(err));
    })
    .then(()=> {
        // window.location.reload(true);
    })
    .catch(error => console.error(error));
}

// Ajouter un commentaire
export function addAComment(post,subject, content) {
    let typeForum = document.querySelector(".containerp span").textContent.replace(' ', '_');

    const data = {
        subject : subject,
        contenu : content,
        date: (new Date()).toLocaleDateString(),
        userId: sessionStorage.getItem('userId'),
        // userId: Number(sessionStorage.getItem('userId')),
        typeForum: typeForum,
        postId : Number(post.id),
    }
    fetch('http://localhost:8081/addComment', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + sessionStorage.getItem('token')
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        response.json()  
        .then((res)=>{console.log(res)})
        .catch((err)=>console.log(err));
    })
    .then(()=> {
        window.location.reload(true);
    })
    .catch(error => console.error(error));
}

// Modifier un commentaire
export function modifyComment(comment, subject, content) {
    const data = {
        subject : subject,
        contenu : content,
        userId: sessionStorage.getItem('userId'),
        // userId: Number(sessionStorage.getItem('userId')),
        commentId: Number(comment.id)
    }
    fetch('http://localhost:8081/modifyOneComment', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + sessionStorage.getItem('token')
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        response.json()
        .then((res)=>{console.log(res);})
        .catch((err)=>console.log(err));
    })
    .then(()=> {
        window.location.reload(true);
    })
    .catch(error => console.error(error));
}

// Supprimer un post et ses commentaires
export function deletePost(post){
    let data = Number(post.id);
    fetch('http://localhost:8081/deleteOnePost', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + sessionStorage.getItem('token')
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        response.json()
        .then((res)=>{console.log(res);})
        .catch((err)=>console.log(err));
    })
    .then(()=> {
        window.location.reload(true);
    })
    .catch(error => console.error(error));
}
      
// Supprimer un commentaire
export function DeleteComment(comment){
    const data = Number(comment.id);
    fetch('http://localhost:8081/deleteOneComment', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + sessionStorage.getItem('token')
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        response.json()
        .then((res)=>{console.log(res);})
        .catch((err)=>console.log(err));
    })
    .then(()=> {
        window.location.reload(true);
    })
    .catch(error => console.error(error));
}

// Modifier un post
export function modifyPost(post, subject, content){
    const data = {
        subject : subject,
        contenu : content,
        userId: sessionStorage.getItem('userId'),
        // userId: Number(sessionStorage.getItem('userId')),
        postId: Number(post.id)
    }

    fetch('http://localhost:8081/modifyOnePost', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + sessionStorage.getItem('token')
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        response.json()
        .then((res)=>{console.log(res);})
        .catch((err)=>console.log(err));
    })
    .then(()=> {
        window.location.reload(true);
    })
  .catch(error => console.error(error));
};
