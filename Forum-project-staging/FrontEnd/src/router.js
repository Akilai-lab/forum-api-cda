import React, { useState, useEffect } from 'react';

import { SignupForm } from './components/Login/Form.js';
import WomenSupport from './components/Forum/womenSupport.js';
import SelfHelpChildren from './components/Forum/selfHelpChildren.js';
import PyschologicalDistress from './components/Forum/psychologicalDistress.js';
import RedirectContactPro from './components/RedirectContact/redirectContactPro.js';
import Aides from './components/GovernementalAide.js';

import { Routes, Route, Outlet, Navigate ,useNavigate } from "react-router-dom";

const ProtectedRoutes = ({UserAuth}) => {
  return UserAuth ? <Outlet/> : <Navigate to={"/"}/>
}
function AppRouter() {
  /* Ici nous avons le routing de l'application qui par défaut une fois la connexion réussi nous redirigera sur le component WomenSupport */
  /* Les Link sont quand à eux les autres routes qui seront utilisées pour la navigation vers les autres components */
  const [auth, setAuth] = useState(sessionStorage.getItem("isLoggin"));

  const isAuth = sessionStorage.getItem("isLoggin");;

  const { status, renderForm } = SignupForm();

  const renderForForm = () => {
    return renderForm();
  };

  useEffect(() => {
    setAuth(isAuth);
    if(!isAuth){
      navigate("login", { replace: true });
    }
  }, [isAuth]);

  const navigate = useNavigate()

  return (
    <>
    <Routes>
      <Route path="/" element={ status === true ? <Navigate to={"/BatteredWoman"}/> : <Navigate to={"/login"}/>}/>
      <Route path="/login" element={auth ? <Navigate to={"/WomenSupport"}/> : renderForForm()}/>
      <Route element={<ProtectedRoutes UserAuth={auth}/>}>
        <Route path='/WomenSupport' element={<WomenSupport />} />
        <Route path='/SelfHelpChildren' element={<SelfHelpChildren />} />
        <Route path='/PyschologicalDistress' element={<PyschologicalDistress />} />
        <Route path='/RedirectContactProabout' element={<RedirectContactPro />} />
        <Route path='/Aides' element={<Aides />} />
      </Route>
    </Routes>
    </>
  );
}
export default AppRouter;
