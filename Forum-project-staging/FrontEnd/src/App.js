import './App.css';
import { status, SignupForm } from './components/Login/Form.js';
import { Data } from './components/Forum/ForumStructure.js';
import AppRouter from './router.js';
function App() {
   /* renderFormPost correspond au formulaire de connexion */
   const { RenderFormPost } = Data();
   const renderForFormPost = () => {
     return RenderFormPost();
   };
   const { status, renderForm } = SignupForm();
   const renderForForm = () => {
     return renderForm();
   }; //renderForForm()
   /* Le DOM en cas de connexion réussie va nous rediriger sur le component router.js sinon l'on y verra le formulaire de connexion */
  return (
    <div className="App">
          <AppRouter />
    </div>
  );
}

export default App;