import Headers from "./Headers";
export default class HomePage extends Headers {
  getSearchList() {
    return cy.get("[pw-automation-id$=list-options]");
  }

  getSearchContentOverlayTitle() {
    return cy.contains("How can we help?");
  }

  visitUrl(urlToNavigate) {
    cy.visit(urlToNavigate);
  }

  getSearchInput() {
    return cy.get("[sp-automation-id=input-searchQuery]").eq(1);
  }

  inputSearchText(searchText) {
    this.getSearchInput().type(searchText);
  }

  getSearchError() {
    return cy.contains("No results");
  }
}
