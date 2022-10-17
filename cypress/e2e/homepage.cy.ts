describe("empty spec", () => {
  beforeEach(() => {
    cy.intercept(
      "GET",
      "http://localhost:3000/"
      // {fixture: ""},
    );
    cy.visit("http://localhost:3000/");
  });

  it("Should have the smart tech logo in the header", () => {
    cy.get('[data-cy="smart-tech-logo"]').should("exist");
  });

  it("Should have a image for the cart in the header", () => {
    cy.get('[data-cy="cart-logo"]').should("exist");
  });

  it("Should have a header that routes the user back to the homepage when clicked", () => {
    cy.get('[data-cy="header"]')
      .click()
      .url()
      .should("equal", "http://localhost:3000/");
  });
});
