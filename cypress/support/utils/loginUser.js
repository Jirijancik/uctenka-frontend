export const loginUser = (email, password) => {
  cy.get("#login_email").type(email);
  cy.get("#login_password").type(password);
  cy.get("[type=submit]").click();
};


// const loginUserSMART = (email, password, selector) => {
//     cy.get(`[data-cy=${selector}-input-email]`).type(email);
//     cy.get(`[data-cy=${selector}-input-password]`).type(password);
//     cy.get("[type=submit]").click();
//   };


//   loginUserSMART("karel", "pass111", "login")
//   loginUserSMART("karel", "pass111", "subscribe-window")

