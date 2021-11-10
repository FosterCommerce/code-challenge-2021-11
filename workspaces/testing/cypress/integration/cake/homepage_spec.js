describe('Homepage Tests', () => {
  it('Checks that the homepage loads and has the company name', () => {
    cy.visit('/');
    cy.title().should('include', 'Foster Commerce');
  });
});