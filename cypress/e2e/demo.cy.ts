describe("demo page spec", () => {
  it("visit", () => {
    cy.visit("/demo");
  });

  it("check action", () => {
    cy.visit("/demo");
    cy.get('button[data-testid="btn"]').should("contain.text", 0);
    cy.get('button[data-testid="btn"]').click();
    cy.get('button[data-testid="btn"]').should("contain.text", 1);
  });
});
