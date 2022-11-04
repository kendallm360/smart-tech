import cypress from "cypress";

describe("cart", () => {
  beforeEach(() => {
    cy.intercept(
      "GET",
      "https://api.bestbuy.com/v1/products((categoryPath.id=abcat0502000))?apiKey=bEisDAA5LpWenkpnbqEt7RmL&format=json",
      { fixture: "categories" }
    );
    cy.visit("http://localhost:3000/");
    cy.get('[data-cy="category"]').eq(4).click();
    cy.get('[data-cy="add-to-cart-button"]').eq(1).click();
    cy.get('[data-cy="add-to-cart-button"]').eq(5).click();
    cy.get('[data-cy="cart-logo"]').click();
  });

  it("Should have 2 elements in cart ", () => {
    cy.get('[data-cy="cart-item"]').should("have.length", 2);
  });
});
