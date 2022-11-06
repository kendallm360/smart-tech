import cypress from "cypress";

describe("homepage", () => {
  beforeEach(() => {
    cy.intercept(
      "GET",
      "https://api.bestbuy.com/v1/products((categoryPath.id=abcat0502000))?apiKey=bEisDAA5LpWenkpnbqEt7RmL&format=json",
      { fixture: "categories" }
    );
    cy.visit("http://localhost:3000/");
  });

  // it("Should have the smart tech logo in the header", () => {
  //   cy.get('[data-cy="smart-tech-logo"]').should("exist");
  // });

  // it("Should have a header that routes the user back to the homepage when clicked", () => {
  //   cy.get('[data-cy="smart-tech-logo"]')
  //     .click()
  //     .url()
  //     .should("equal", "http://localhost:3000/");
  // });

  // it("Should have a image for the cart in the header", () => {
  //   cy.get('[data-cy="cart-logo"]').should("exist");
  // });

  // it("Should have a button that takes the user to their cart", () => {
  //   cy.get('[data-cy="cart-logo"]').click();
  //   cy.url().should("equal", "http://localhost:3000/cart");
  // });

  // it("Should have at least 9 categories to choose from", () => {
  //   cy.get('[data-cy="category"]').should("have.lengthOf.at.least", 9);
  // });

  // it("Should be able to update the url to reflect the selected category", () => {
  //   cy.get('[data-cy="category"]').eq(0).click();
  //   cy.url().should("equal", "http://localhost:3000/Cellphones");
  // });

  it("Should allow the user to go back to use the back and forward arrows", () => {
    cy.get('[data-cy="category"]').eq(0).click();
    cy.url().should("equal", "http://localhost:3000/Cellphones");
    cy.go("back");
    cy.url().should("equal", "http://localhost:3000/");
    cy.go("forward");
    cy.url().should("equal", "http://localhost:3000/Cellphones");
  });

  // it("Should show the correct quantity amount when items are added to cart", () => {
  //   cy.get('[data-cy="category"]').eq(2).click();
  //   cy.wait(5000);
  //   cy.get('[data-cy="add-to-cart-button"]').eq(0).click();
  //   cy.get('[data-cy="add-to-cart-button"]').eq(1).click();
  //   cy.go("back");
  //   cy.wait(3000);
  //   cy.get('[data-cy="cart-quantity"]').should("contain", 2);
  // });
});
