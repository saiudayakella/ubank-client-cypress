export default class LoginPage {
  visit(urlToNavigate) {
    cy.visit(urlToNavigate);
  }

  getFormPageHeading() {
    return cy.contains("Log in to ubank");
  }

  getUsername() {
    return cy.get("[sp-automation-id=input-username]");
  }

  enterUsername(username) {}

  enterPassword(password) {}
}
