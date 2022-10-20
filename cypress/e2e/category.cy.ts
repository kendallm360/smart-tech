describe("empty spec", () => {
  beforeEach(() => {
    cy.intercept(
      "GET",
      "http://localhost:3000/"
      // {fixture: ""},
    );
    cy.visit("http://localhost:3000/cellphones");
  });

  it.skip("Should have a header that says cellphones", () => {
    cy.get("h2").should("equal", "cellphones");
  });
});
