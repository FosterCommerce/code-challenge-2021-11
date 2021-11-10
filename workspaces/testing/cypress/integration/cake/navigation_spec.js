describe('Navigation Tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  context('Mobile Tests', () => {
    beforeEach(() => {
      cy.viewport('iphone-8');
    });

    it('Checks that the mobile navigation can open and close', () => {
      cy.findByRole('button', {name: 'Open Navigation'}).as('toggleMobileMenu');

      cy.get('@toggleMobileMenu').click().then(($button) => {
        cy.wrap($button).should('have.attr', 'aria-expanded', 'true');
        cy.get(`#${$button.attr('aria-controls')}`).then(($nav) => {
          $nav.is(':visible');
        });
      });

      cy.get('@toggleMobileMenu').click().then(($button) => {
        cy.wrap($button).should('have.attr', 'aria-expanded', 'false');
        cy.get(`#${$button.attr('aria-controls')}`).then(($nav) => {
          $nav.not(':visible');
        });
      });
    });

    it('Checks that the links in the navigation work', () => {
      cy.findByRole('button', {name: 'Open Navigation'}).as('toggleMobileMenu');

      cy.get('@toggleMobileMenu').click().then(($button) => {
        cy.wrap($button).should('have.attr', 'aria-expanded', 'true');
        cy.get(`#${$button.attr('aria-controls')}`).as('mobileMenu').then(($nav) => {
          $nav.is(':visible');
        });

        cy.findAllByRole('link', {name: /About/i}).first().click().then(() => {
          cy.get('@mobileMenu').not(':visible');
        });
      });
      cy.title().should('include', 'About');
    });
  });

  context('Desktop Tests', () => {
    it('Checks that the links in the navigation work', () => {
      cy.findAllByRole('link', {name: /About/i}).first().click();
      cy.title().should('include', 'About');
    });
  });
});