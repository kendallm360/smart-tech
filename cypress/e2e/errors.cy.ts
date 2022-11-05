describe("errors", () => {
  beforeEach(() => {
    cy.intercept(
      "GET",
      "https://api.bestbuy.com/v1/products((categoryPath.id=abcat0502000))?apiKey=bEisDAA5LpWenkpnbqEt7RmL&format=json",
      { fixture: "categories" }
    );
    cy.visit("http://localhost:3000/");
    cy.get('[data-cy="category"]').eq(2).click();
  });

  it("Should show a loading page while category data is being fetched", () => {
    cy.get('[data-cy="loading"]').should("exist");
  });
});
