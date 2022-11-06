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
    cy.wait(3500);
    cy.get('[data-cy="add-to-cart-button"]').eq(1).click();
    cy.get('[data-cy="add-to-cart-button"]').eq(5).click();
    cy.get('[data-cy="cart-logo"]').click();
    cy.wait(6000);
  });

  it("Should show cart's header", () => {
    cy.get('[data-cy="cart-header"]').should("exist");
  });

  it("Should have 2 elements in cart ", () => {
    cy.get('[data-cy="cart-item"]').should("have.length", 2);
    cy.get('[data-cy="cart-quantity"]').should("contain", 2);
  });

  it("Should allow the user to delete items from the cart", () => {
    cy.get('[data-cy="remove-item-button"]').eq(0).click();
    cy.get('[data-cy="cart-quantity"]').should("contain", 1);
  });

  it("Should not allow user to checkout", () => {
    cy.get(".checkout-button").should("be.disabled");
  });

  it("Should show an error message if the cart is empty", () => {
    cy.get('[data-cy="remove-item-button"]').eq(0).click();
    cy.get('[data-cy="remove-item-button"]').eq(0).click();
    cy.get('[data-cy="empty-cart-header"]').should(
      "contain",
      "Your Cart is Currently empty"
    );
    cy.get('[data-cy="cart-quantity"]').should("contain", 0);
    cy.get('[data-cy="empty-cart-message"]').should(
      "contain",
      "Before you are able to 'checkout' you must add some products to your shopping cart"
    );
  });

  it("Should allow user to update a single item's quantity", () => {
    cy.get('[data-cy="quantity-dropdown"]').eq(0).select(3);
    cy.get('[data-cy="quantity-dropdown"]').eq(0).should("have.value", 4);
  });
});
