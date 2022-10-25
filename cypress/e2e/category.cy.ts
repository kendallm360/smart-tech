describe("category", () => {
  beforeEach(() => {
    cy.intercept(
      "GET",
      "https://api.bestbuy.com/v1/products((categoryPath.id=abcat0502000))?apiKey=bEisDAA5LpWenkpnbqEt7RmL&format=json",
      { fixture: "categories" }
    );
    cy.visit("http://localhost:3000/");
    cy.get('[data-cy="category"]').eq(4).click().wait(4000);
  });

  it("Should have a header that says laptops", () => {
    cy.get('[data-cy="category-header"]').contains("Laptops");
  });

  //should show an error page if not more than 10
  it("Should have more than 10 items to choose from", () => {
    cy.wait(4000);
    cy.get('[data-cy="item-card"]').should("have.length.at.least", 10);
  });

  it("Should allow the user to click on an item to see more information about it", () => {
    cy.get('[data-cy="item-card"]').eq(0).click();
  });

  it("Should have back and forward functionality through Router", () => {
    cy.go("back").url().should("equal", "http://localhost:3000/");
    cy.go("forward");
    cy.url().should("equal", "http://localhost:3000/Laptops");
  });
  // add testing coverage for sorting and fitering once that is implemented
});
