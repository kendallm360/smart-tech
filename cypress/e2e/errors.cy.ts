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

  //move this test to Item spec once created
  // it("Should show a loading page while item data is being fetched", () => {
  //   cy.get('[data-cy="item-info"]').eq(0).click();
  //   cy.get('[data-cy="loading"]').should("exist");
  // });

  //should show an error page if not more than 10
});
