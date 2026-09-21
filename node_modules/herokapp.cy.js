describe ( 'set de pruebas', function(){

it ('TC1LoginSuccessful' ,function(){

    cy.visit ('https://the-internet.herokuapp.com/login')
    cy.get('[name="username"]').type('tomsmith')
    cy.get('[name="password"]').type('SuperSecretPassword!')
    cy.get('.radius').click()
    cy.get('.subheader').should('contain.text', 'Welcome to the Secure Area. When you are done click logout below.')
    cy.get('.button').click()
    //cy.get('.subheader').should('contain.text', 'You logged out of the secure area!')
    cy.get('#flash').should('contain.text', 'You logged out of the secure area!')
     

    })


it ('TC2 InvalidUser' ,function(){

    cy.visit ('https://the-internet.herokuapp.com/login')
    cy.get('[name="username"]').type('invaliduser')
    cy.get('[name="password"]').type('SuperSecretPassword!')
    cy.get('.radius').click()
    cy.get('#flash').should('contain.text', ' Your username is invalid!')
    cy.get('.radius').click()
    
     })


it ('TC2 Invalipassword' ,function(){

    cy.visit ('https://the-internet.herokuapp.com/login')
    cy.get('[name="username"]').type('tomsmiths')
    cy.get('[name="password"]').type('invalidpassword!')
    cy.get('.radius').click()+
    cy.get('#flash').should('contain.text', ' Your username is invalid!')
    cy.get('.radius').click()
    
     })









})