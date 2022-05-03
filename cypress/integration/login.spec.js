

describe("complete login test!", () => {
  const LOGIN = "test@test.test";
  const VALID_PASWORD = "test";
  const INVALID_PASWORD = "dsasdfaf";

  beforeEach(() => {
    cy.reload();
  });

  it("login without credentials", () => {
    cy.visit("http://localhost:3000/login");
    cy.get("[type=submit]").click();

    cy.get("[role=alert]")
      .should("have.length", 2)
      .each(($alert) => cy.wrap($alert).should("be.visible"));
    cy.reload();
    cy.visit("http://localhost:3000/dashboard");
  });

  it("login with wrong credentials", () => {
    cy.loginUser(LOGIN, INVALID_PASWORD);

    cy.get(".ant-alert-message").should("be.visible");
  });

  it("valid login and logout", () => {
    cy.loginUser(LOGIN, VALID_PASWORD);

    cy.url().should("include", "/dashboard");

    cy.contains("header .ant-space-item > button", "LOGOUT").click({
      force: true,
    });
    cy.url().should("include", "/login");

    cy.visit("http://localhost:3000/dashboard");
    cy.url().should("include", "/login");
  });

  it("input password text visibility", () => {
    cy.get("#login_password")
      .should("have.attr", "type")
      .and("equal", "password");
    cy.get(".ant-input-password-icon").click();
    cy.get("#login_password").should("have.attr", "type").and("equal", "text");
  });
});
