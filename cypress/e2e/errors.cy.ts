describe("errors", () => {
  beforeEach(() => {
    cy.intercept(
      "GET",
      "https://api.bestbuy.com/1/products((categoryPath.id=abcat0502000))?apiKey=bEisDAA5LpWenkpnbqEt7RmL&format=json",
      { fixture: "categories" }
    );
    cy.visit("http://localhost:3000/");
  });

  it("should show a loading page while data is being fetched", () => {
    cy.get('[data-cy="category"]').eq(2).click();
    cy.get('[data-cy="loading"]').should("exist");
  });

  it("Should show a loading page while data is being fetched", () => {
    cy.get('[data-cy="category"]').eq(3).click();
    cy.get('[data-cy="item-info"]')
      .eq(0)
      .click()
      .get('[data-cy="loading"]')
      .should("exist");
  });
});
