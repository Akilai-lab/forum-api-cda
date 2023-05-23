// describe('Login Page', () => {
//   it('successfully loads', () => {
//     cy.visit('http://localhost:3000/login')
//   })
// })
beforeEach(()=> {
  // it('successfully clear session', () => {
  //   cy.clearAllSessionStorage()
  // })
  it('successfully register new user', () => {
    // création de nouveau compte utilisateur
    cy.request('POST', 'http://localhost:8081/register', {
      email: 'test.adresse@gmail.fr',
      password: 'root'
    })
    .then(response => {
      cy.request({
        method: 'GET',
        url: 'http://localhost:8081/getAllUsers',
        failOnStatusCode: false,
        Authorization: 'Bearer '+ response.body.token
      })
      .then(
        (response) => {
          cy.log(response.body)
      })
    })
    cy.getAllSessionStorage().then((result) => {
      cy.log(result);
    })
    it('successfully clear session', () => {
      cy.clearAllSessionStorage()
    })
  })
})

it('successfully register new user', () => {
      // création de nouveau compte utilisateur
      cy.request('POST', 'http://localhost:8081/register', {
        email: 'test.adresse@gmail.fr',
        password: 'root'
      })
      .then(response => {
        cy.log('Bearer '+ response.body.token)
        cy.request({
          method: 'GET',
          url: 'http://localhost:8081/getAllUsers',
          headers: {
            'Authorization': 'Bearer '+ response.body.token,
          }
        })
        .then(
          (res) => {
            (res.body.data).forEach(element => {

              // if(element.email === 'test.adresse@gmail.fr') {
              //   let userId = element.id;
              //   cy.log(user)
              // cy.request({
              //   method: 'DELETE',
              //   url: 'http://localhost:8081/deleteAccount',
              //   headers: {
              //     'Authorization': 'Bearer '+ response.body.token,
              //   },
              //   body:{
              //     userId
              //   }
              // })
              //   return user;
              // }
            })
        })
      })
      cy.getAllSessionStorage().then((result) => {
        cy.log(result);
      })
      it('successfully clear session', () => {
        cy.clearAllSessionStorage()
      })
    })
  it('successfully connection user', () => {
    // connection d'un utilisateur
    cy.request('POST', 'http://localhost:8081/login', {
      email: 'mail.adresse@gmail.fr',
      password: 'motdepasse',
      // body: '...',
    })
    .then((response) => {
      cy.log(response.body.token)
      cy.request({
        method: 'GET',
        url: 'http://localhost:8081/getAllUsers',
        headers: {
          // 'Content-Type': 'application/json',
          'Authorization': 'Bearer '+ response.body.token,
          // 'Cache-Control': 'no-cache',
          // 'Connection' : 'keep-alive'
        }
      })
      .then(
        (response) => {
          cy.log(response.body)
      })
    })
    cy.getAllSessionStorage().then((result) => {
      cy.log(result);
    })
    it('successfully clear session', () => {
      cy.clearAllSessionStorage()
    })
  })

describe('Default Page', () => {
  it('successfully loads', () => {
    cy.visit('http://localhost:3000')
  })
})

describe('Forum Women Page', () => {
  it('successfully loads', () => {
    cy.visit('http://localhost:3000/BatteredWomen')
  })
})

describe('Forum Children Page', () => {
  it('successfully loads', () => {
    cy.visit('http://localhost:3000/ChildrenAid')
  })
})

describe('Forum Distress Page', () => {
  it('successfully loads', () => {
    cy.visit('http://localhost:3000/PyschologicalDistress')
  })
})

describe('Forum redirect Contact Page', () => {
  it('successfully loads', () => {
    cy.visit('http://localhost:3000/RedirectContactProabout')
  })
})

describe('Forum Aides Page', () => {
  it('successfully loads', () => {
    cy.visit('http://localhost:3000/Aides')
  })
})