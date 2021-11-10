describe('Blog Tests', () => {
  beforeEach(() => {
    cy.visit('/commerce-minded');
  });

  it('Checks if a user can filter blog post types', () => {
    cy.findByRole('radio', {name: /Everything/i}).then(($radio) => {
      cy.wrap($radio).should('be.checked');
    });

    cy.findByRole('radio', {name: /Articles/i}).click({force: true}).then(($radio) => {
      cy.wrap($radio).should('be.checked');
      cy.findAllByLabelText(/Episode Number/i).should('not.exist');
    });

    cy.findByRole('radio', {name: /Podcasts/i}).click({force: true}).then(($radio) => {
      cy.wrap($radio).should('be.checked');
      cy.findAllByLabelText(/Episode Number/i);
    });
  });
});