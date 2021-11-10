describe('Pages Tests', () => {
  it('Checks that all the pages load', () => {
    cy.visit('/');

    cy.findAllByRole('link', {name: /About/i}).first().click();
    cy.title().should('include', 'About');

    cy.findAllByRole('link', {name: /Services/i}).first().click();
    cy.title().should('include', 'Services');

    cy.findAllByRole('link', {name: /Software/i}).first().click();
    cy.title().should('include', 'Software');

    cy.findAllByRole('link', {name: /Contact/i}).first().click();
    cy.title().should('include', 'Contact');

    cy.findAllByRole('link', {name: /Commerce Minded/i}).first().click();
    cy.title().should('include', 'Commerce Minded');
  });

});