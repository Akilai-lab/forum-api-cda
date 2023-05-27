import React from 'react';
import { Button, FormControl,TextField } from '@mui/material';
// import fetch from "node-fetch";
import { useNavigate } from 'react-router';

const SignupForm = () => {

  const [email, onChangeEmail] = React.useState("");
  const [password, onChangePassword] = React.useState("");

  const [status, isConnected] = React.useState(false);

  const navigate = useNavigate();
    /* fonction de création de compte */
  function sendDataCreateAccount(){
    const data = { email: email, password: password };
    console.log(data);
    fetch('http://localhost:8081/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => {
      response.json()
      .then((res)=>{
        sessionStorage.setItem('token',res.token);
        sessionStorage.setItem('isLoggin',true);
        sessionStorage.setItem('userId', res.userId);
        isConnected(true);
      })
      .catch((err)=>console.log(err));
    })
    .catch(error => console.error(error));
  }
  /* fonction de connection à développer 29/04 */
  function sendDataLogin() {
    const data = {
      email : email,
      password : password
    }
    // console.log(data);
    fetch('http://localhost:8081/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => {
      response.json()
      .then((res)=>{
        sessionStorage.setItem('token',res.token);
        sessionStorage.setItem('isLoggin',true);
        sessionStorage.setItem('userId', res.userId);
        isConnected(true);
        // navigate('/BatteredWomen');
      })
      .catch((err)=>console.log(err));
    })
    .catch(error => console.error(error));
  }
  /* Cette partie contient le formulaire pour s'inscrire ou se connecter */
  const renderForm = () => {
    return (
      <FormControl id="formLogin">
        <TextField id="email" required label="Email Adress" onChange={e => onChangeEmail(e.target.value)} variant="outlined" />
        <br style={{marginTop:10}}></br>
        <TextField id="password" type="password" required label="password" onChange={e => onChangePassword(e.target.value)} variant="outlined" />
        <br style={{marginTop:10}}></br>
        <Button onClick={sendDataCreateAccount}>S'inscrire</Button>
        <br style={{marginTop:10}}></br>
        <Button className="btn-submit" onClick={sendDataLogin}>Se connecter</Button>
      </FormControl>
    );
  }
  /* l'on va exporter le formulaire et le status de connexion */
  return { status, renderForm };
}
export { SignupForm };