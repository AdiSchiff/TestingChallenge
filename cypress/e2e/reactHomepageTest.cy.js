import { HomePage } from '../pages/homepage';

describe('React.dev UI Tests', () => {
  const homepage = new HomePage();

  beforeEach(() => {
    homepage.visit();
  });

  // it('has header and footer', () => {
  //   homepage.getHeader().should('exist');
  //   homepage.getFooter().should('exist');
  // });

  it('toggles mode theme', () => {
    homepage.getEnableDarkModeButton().click();
    cy.get('html').should('have.class', 'dark');

    homepage.getEnableLightModeButton().click();
    cy.get('html').should('not.have.class', 'dark');
  });

  it('searches and saves a query to history', () => {
    homepage.openSearch();
    homepage.typeInSearch('Reusing Logic with Custom Hooks');
    homepage.clickFirstSearchResult();
    homepage.reopenSearch();
    homepage.checkSavedSearch('Reusing Logic with Custom Hooks');
  });

  it('searches and saves a query to favorits', () => {
    homepage.openSearch();
    homepage.typeInSearch('Writing Markup with JSX');
    homepage.clickFirstSearchResult();
    homepage.reopenSearch();
    homepage.clickStar();
    homepage.cancelSearch();
    homepage.reopenSearch();
    homepage.checkSavedSearch('Writing Markup with JSX');
  });

   it('back to home page', () => {
    homepage.clickLearnReact();
    homepage.clickReactLogo();
  });

  it('allows keyboard navigation (accessibility)', () => {
  cy.get('body').tab();
  cy.focused().should('exist');
});
});
