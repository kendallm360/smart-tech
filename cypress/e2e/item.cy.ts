import cypress from "cypress";

describe("item", () => {
  beforeEach(() => {
    cy.intercept(
      "GET",
      "https://api.bestbuy.com/v1/products((categoryPath.id=abcat0901000))?apiKey=bEisDAA5LpWenkpnbqEt7RmL&format=json",
      { fixture: "categories" }
    );
    cy.visit("http://localhost:3000/");
    cy.get('[data-cy="category"]').eq(7).click().wait(2000);
    cy.get('[data-cy="item-name"]').eq(2).click().wait(2000);
  });

  it("Should have all of the item's information on screen", () => {
    cy.get('[data-cy="item-title"]').should("contain", "Smart Tizen");
    cy.get('[data-cy="item-image"]').should("be.visible");
    cy.get('[data-cy="item-description"]').should("contain", "Get crisp");
    cy.get('[data-cy="item-sku"]').should("contain", 6202106);
    cy.get('[data-cy="item-price"]').should("contain", 229.99);
  });

  it("Should allow the user to add the item to the cart", () => {
    cy.get(".add-to-cart").click();
    cy.get('[data-cy="cart-quantity"]').should("contain", 1);
  });

  it("Should only allow the user to add the item to the cart once", () => {
    cy.get(".add-to-cart").click();
    cy.get(".add-to-cart").should("be.disabled");
    cy.get('[data-cy="cart-quantity"]').should("contain", 1);
  });
});
