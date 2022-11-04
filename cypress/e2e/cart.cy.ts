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

  it("Should show cart's header", () => {
    cy.get('[data-cy="cart-header"]').should("exist");
  });

  it("Should have 2 elements in cart ", () => {
    cy.get('[data-cy="cart-item"]').should("have.length", 2);
  });

  it("Should allow the user to delete items from the cart", () => {
    cy.get('[data-cy="remove-item-button"]').eq(0).click();
    cy.get('[data-cy="cart-quantity"]').should("contain", 1);
  });

  it("Should not allow user to checkout", () => {
    cy.get(".checkout-button").should("be.disabled");
  });

  // it.only("Should show an error message if the cart is empty", () => {
  //   cy.get('[data-cy="remove-item-button"]').eq(0).click();
  //   cy.get('[data-cy="remove-item-button"]').eq(0).click();
  // });
});
