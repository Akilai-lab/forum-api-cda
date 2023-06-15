import React from 'react';
import {Button} from '@mui/material';
import Header from './Header/header.js';
/*UTILS*/
import './GovernementalAide.css';
const Aides = () => {
  function RedirectionMonParcoursPsy(){
      let url = "https://monparcourspsy.sante.gouv.fr/";
      window.open(url, '_blank');
  }
  function RedirectionPsyCom(){
      let url = "https://www.psycom.org/sorienter/les-lignes-decoute/";
      window.open(url, '_blank');
  }
  function RedirectionGouvernement(){
      let url = "https://www.gouvernement.fr/egalite-outremer/associations-0";
      window.open(url, '_blank');
  }
    return (
      <div className="container">
        <div className='headerImgRedirect'>
          <p className="containerp">
            Quelques aides gouvernementales 
          </p>
          <Header />
        </div>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          margin: '2%'
        }}>
          <div style={{
            width: '45%',
            border: '1px solid black',
            color: 'white',
            backgroundColor:'#a0522d96'
          }}>
            <>
              <p className="classicp">
                <span className="title2">
                  Avec MonParcoursPsy, bénéficiez de 8 séances par an chez un ou une psychologue
                </span>
                <br></br>
                Un annuaire de psychologues partenaires expérimentés sélectionnés sur leur expérience professionnelle.
                Un parcours de soins pris en charge par l’Assurance Maladie.
              </p>
            </>
            <Button className='redirectionMonParcoursPsy'
              onClick={() => RedirectionMonParcoursPsy()}
            >en savoir plus</Button>
          </div>
          <div style={{
            width: '45%',
            border: '1px solid black',
            color: 'white',
            backgroundColor:'#a0522d96'
          }}>
            <>
              <p className="classicp">
                <span className="title2">
                  Site d'aide pour l'égalité des chances des français d'OUTRE-MER et la visibilité des OUTRE-MER
                </span>
                <br></br>
                Recense de nombreuses aides destinées principalement aux etudiants, en lien avec les aides au logement, les contrats d'apprentissages ou encore des services d'écoutes. 
              </p>
            </>
            <Button className='redirectionGouvernement'
              onClick={() => RedirectionGouvernement()}
            >en savoir plus</Button>
          </div>
          <div style={{
            width: '45%',
            border: '1px solid black',
            color: 'white',
            backgroundColor:'#a0522d96'
          }}>
            <>
              <p className="classicp">
                <span className="title2">
                  Psycom, est un organisme public d'information sur la santé mentale et de lutte contre la stigmatisation.  
                </span>
                <br></br>
                Promouvoir une vision globale de la santé mentale à destination de publics variés. 
                Proposer une information fiable, accessible et indépendante sur la santé mentale, les troubles psychiques, les soins, les traitements,  l’accompagnement social, les droits, etc.
                Décrypter la stigmatisation liée aux problèmes de santé mentale, et développer des outils pour agir contre les discriminations des personnes vivant avec des troubles psychiques.
              </p>
            </>
            <Button className='redirectionPsyCom'
              onClick={() => RedirectionPsyCom()}
              >en savoir plus</Button>
          </div>
        </div>
      </div>
    );
}
export default Aides;