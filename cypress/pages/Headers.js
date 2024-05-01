import LoginPage from "./LoginPage";
export default class Headers {
  getSearchBtn() {
    return cy.get("[pw-automation-id$=search-button]");
  }

  getNavigationMenuOptions() {
    return cy.get(".pw-nav__menu").eq(0);
  }

  getLoginBtn() {
    return cy.get("[sp-automation-id$=nav-login-link]");
  }

  goToLoginPage() {
    this.getLoginBtn().click();
    return new LoginPage();
  }

  getHeaderLogoBtn() {
    return cy.get("[pw-automation-id^=pw-header-logo]");
  }

  getNavigationMenuOptions() {
    return cy.get(".pw-nav__menu").eq(0);
  }

  clickSearchBtn() {
    this.getSearchBtn().click();
  }
}
