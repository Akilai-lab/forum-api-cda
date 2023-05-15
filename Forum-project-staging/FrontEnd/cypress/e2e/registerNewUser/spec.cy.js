describe('Login Page', () => {
  it('successfully loads', () => {
    cy.visit('http://localhost:3001/login')
  })
})

afterEach(() => {
  cy.sqlServer(`DELETE FROM 'user' WHERE 'email' = 'test.adresse@gmail.fr'`).should('eq', 'test');

})

  // création de nouveau compte utilisateur
  cy.request('POST', 'http://localhost:8081/register', {
    email: 'test.adresse@gmail.fr',
    password: 'root'
  })
  
  // connection d'un utilisateur
  cy.request('POST', 'http://localhost:8081/login', {
    email: 'mail.adresse@gmail.fr',
    password: 'motdepasse',
    // body: '...',
  })
// describe('Register Page', () => {
//   it('successfully loads', () => {
//     cy.visit('/register')
//   })
// })

describe('Default Page', () => {
  it('successfully loads', () => {
    cy.visit('http://localhost:3001')
  })
})

describe('Forum Women Page', () => {
  it('successfully loads', () => {
    cy.visit('http://localhost:3001/BatteredWomen')
  })
})

describe('Forum Children Page', () => {
  it('successfully loads', () => {
    cy.visit('http://localhost:3001/ChildrenAid')
  })
})

describe('Forum Distress Page', () => {
  it('successfully loads', () => {
    cy.visit('http://localhost:3001/PyschologicalDistress')
  })
})

describe('Forum redirect Contact Page', () => {
  it('successfully loads', () => {
    cy.visit('http://localhost:3001/RedirectContactProabout')
  })
})

describe('Forum Aides Page', () => {
  it('successfully loads', () => {
    cy.visit('http://localhost:3001/Aides')
  })
})