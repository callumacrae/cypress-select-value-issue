context('Aliasing', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080');
  });

  it('should preserve value', () => {
    cy.get('select').select('Changed value');
  });
});
