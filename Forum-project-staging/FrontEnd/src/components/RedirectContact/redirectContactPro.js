import { PostalCodes } from './postalCodes.js';
import './styles.css';
import Header from './../Header/header.js';
const RedirectContactPro = ({navigation}) => {
const { codePostal, renderPostal } = PostalCodes();

  const RenderForPostal = () => {
    return renderPostal();
  };

  return (
    <div className="container">
      <div className='headerImgRedirect'>
        <p className="containerp">
          Vous souhaitez être mis en relation
          <br></br> avec un professionnel?
        </p>
        <Header />
      </div>
      <div style={{
        width:'100%', 
        padding:'3%'
      }}>
        <p style={{
          color: '#b1590e',
          fontWeight: '600',
          fontSize: '1.09em',
        }}>
          Rentrez votre code postal ci dessous et choisissez parmis un professionnel proche de vous - {codePostal}
        </p>
        <div style={{
          marginTop:70
          }}>
          {RenderForPostal()}
        </div>
      </div>
    </div>
  );
}

export default RedirectContactPro;