// MY VALUES
const DASHBOARD_STRING = "/dashboard"


describe('My First Test', () => {


  it('Visits login page', () => {
    cy.visit('http://localhost:3000/login')
    cy.get("[type=submit]").click()
  });

  
it('imput email', () => {
  cy.get('#login_email').type("test@test.test");
  cy.get('#login_password').type("test");
  cy.get("[type=submit]").click()
  
});
 

it('kontrola, ye jsem na homepage', () => {
 cy.get(".logo").should('contain', "UCTENKA");

  cy.url().should('include', DASHBOARD_STRING)
});

});

