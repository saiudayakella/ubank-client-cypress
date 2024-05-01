import HomePage from "../pages/HomePage";
describe("HomePage User Actions", () => {
  const homePage = new HomePage();
  const urlToVisit = "/";

  beforeEach(() => {
    homePage.visitUrl(urlToVisit);
    homePage.getHeaderLogoBtn().should("be.visible");
  });

  context("Page navigation", () => {
    it("Navigate to login page", () => {
      const loginPage = homePage.goToLoginPage();
      loginPage.getFormPageHeading().should("be.visible");
      loginPage.getUsername().should("be.visible");
    });
  });

  context("Search content", () => {
    beforeEach(() => {
      homePage.clickSearchBtn();
      homePage.getSearchContentOverlayTitle().should("be.visible");
      homePage
        .getSearchList()
        .should("be.visible")
        .and("have.length.at.least", 1);
    });
    it("Valid search text", () => {
      homePage.inputSearchText("Banking");
      homePage
        .getSearchList()
        .should("be.visible")
        .and("have.length.at.least", 1);
    });
    it("Invalid search text", () => {
      homePage.inputSearchText("fdf");
      homePage.getSearchList().should("not.exist");
      homePage.getSearchError().should("be.visible");
    });
  });
});
