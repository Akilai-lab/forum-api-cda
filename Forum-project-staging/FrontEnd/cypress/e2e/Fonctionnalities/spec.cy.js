describe('Fonctionnalities Login And Forum', () => {
  it('successfully loads', () => {
    
    // Fonction de verification de connection
    function getDatas() {
        cy.visit('http://localhost:3000/login')
        cy.get('#email').type('mail.adresse@gmail.fr');
        cy.get('#password').type('motdepasse');
        cy.get('.btn-submit').click();

        //Add new post
        cy.get('#Subject').type('Lorem ipsum dolor sit amet, consectetur adipiscing elit');
        cy.get('#Content').type('Aenean scelerisque dolor eget gravida vehicula. Sed vehicula ipsum at auctor sagittis');
        cy.get('.newPost').click();    
    }
    getDatas();

    // Fonction de verification de redirection vers Doctolib
    function redirectDoctolib() {
      cy.visit('http://localhost:3000/RedirectContactProabout');

      cy.get('#codePostal').type('06130');
      cy.get('#professionnal').type('psychologue');
      cy.get('.submitSearch').click();
    }
    redirectDoctolib();

    // Fonctions de verification de redirection vers les liens de site d'aide
    function helpLinks_1() {
      cy.visit('http://localhost:3000/Aides');
      cy.get('.redirectionMonParcoursPsy').click();
    }

    function helpLinks_2() {
      cy.visit('http://localhost:3000/Aides');
      cy.get('.redirectionPsyCom').click();
    }

    function helpLinks_3() {
      cy.visit('http://localhost:3000/Aides');
      cy.get('.redirectionGouvernement').click();
    }
    helpLinks_1(), helpLinks_2(), helpLinks_3();
  })
})

describe('Forum Children Page', () => {
  it('successfully loads', () => {
    cy.visit('http://localhost:3000/selfHelpChildren')
  })
})

describe('Forum Distress Page', () => {
  it('successfully loads', () => {
    cy.visit('http://localhost:3000/PyschologicalDistress')
  })
})
