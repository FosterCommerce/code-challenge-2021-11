describe('Newsletter Subscribe Tests', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.intercept('POST', (Cypress.env('PRIMARY_SITE_URL') + '/actions/klaviyoconnect/api/track')).as('submission');
  });

  it('Checks that the Newsletter Subscribe form is working', () => {
    cy.findByPlaceholderText(/Email/i).type(Cypress.env('TEST_EMAIL'));
    cy.findByRole('button', {name: /Submit/i}).click();
    cy.wait('@submission');
    cy.findByText(/Confirmed/i).should('exist');
  });
});