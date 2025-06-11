export class HomePage {
  visit() {
    cy.visit('https://react.dev');
  }

  getHeader() {
    return cy.get('header');
  }

  getFooter() {
    return cy.get('footer');
  }

  getEnableDarkModeButton() {
    return cy.get('button[aria-label="Use Dark Mode"]').should('be.visible');
  }

  getEnableLightModeButton() {
    return cy.get('button[aria-label="Use Light Mode"]').should('be.visible');
  }


  openSearch() {
    cy.get('.justify-between > .flex-1 > .flex').click();
  }

  typeInSearch(query) {
    cy.get('#docsearch-input').type(query);
  }

  clickFirstSearchResult() {
    cy.get('#docsearch-hits0-item-0 > a').click();
  }

  clickStar() {
    cy.get('button[title="Save this search"]').click();

  }

  reopenSearch() {
    this.openSearch();
  }

  cancelSearch() {
    cy.get('.DocSearch-Cancel').click();
  }

  checkSavedSearch(query) {
    cy.get('section').contains(query);
  }

  clickLearnReact(){
    cy.get('.mt-5 > .bg-link').click();
  }

  clickReactLogo(){
    cy.get('span.flex > :nth-child(1) > .uwu-hidden').click();
  }
}
