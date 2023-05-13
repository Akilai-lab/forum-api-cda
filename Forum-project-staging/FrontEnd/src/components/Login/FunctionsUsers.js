import {datasLoginUser, datasLoginUser2, forumDataArray, forumCommentDataArray} from './../../data/mock.js';
// import fetch from 'node-fetch';

// Se Déconnecter de son compte
export const disconnectToAccount = (userId) =>{
  sessionStorage.clear();
  window.location.reload()
}

// Supprimer son compte
export const deleteMyAccount = (userId) => {
  let data = Number(userId);
  fetch('http://localhost:8081/deleteAccount', {
      method: 'DELETE',
      headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + sessionStorage.getItem('token')
      },
      body: JSON.stringify(data)
  })
  .then(response => {
      response.json()
      .then((res)=>{
        console.log(res);
      })
      .catch((err)=>console.log(err));
  })
  .then(()=> {  
      sessionStorage.clear();
      window.location.reload(true);
  })
  .catch(error => console.error(error));
}