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

  it("Should have more than 10 items to choose from", () => {
    cy.wait(4000);
    cy.get('[data-cy="item-card"]').should("have.length.at.least", 10);
  });

  it("Should allow the user to click on an item to see more information about it", () => {
    cy.get('[data-cy="item-card"]').eq(0).click();
    cy.get('[data-cy="item-title"]').should("exist");
  });

  it("Should have back and forward functionality through Router", () => {
    cy.go("back").url().should("equal", "http://localhost:3000/");
    cy.go("forward");
    cy.url().should("equal", "http://localhost:3000/Laptops");
  });

  it("Should be able to sort items from lowest price to highest", () => {
    cy.get('[data-cy="sort-dropdown"]').select("low");
    cy.get('[data-cy="name"]')
      .eq(0)
      .contains(
        "Super Sonic - 10.1” Touch 2in1 Intel CherryTrail Z8350 2GB 32GB - Silver tablet with Black case and keyboard"
      );
    cy.get('[data-cy="price"]').eq(0).contains(199.0);
  });

  it("Should be able to sort items from highest price to lowest", () => {
    cy.get('[data-cy="sort-dropdown"]').select("high");
    cy.get('[data-cy="name"]')
      .eq(0)
      .contains("Alienware - AREA-51 2.8GHz Notebook");
    cy.get('[data-cy="price"]').eq(0).contains(2529.0);
  });

  it("Should be able to update the cart quantity as items are added to cart", () => {
    cy.get('[data-cy="add-to-cart-button"]').eq(5).click();
    cy.get('[data-cy="add-to-cart-button"]').eq(7).click();
    cy.get('[data-cy="add-to-cart-button"]').eq(9).click();
    cy.get('[data-cy="cart-quantity"]').should("contain", 3);
  });

  it("Should prevent the user from adding the same item to the cart multiple times", () => {
    cy.get('[data-cy="add-to-cart-button"]').eq(2).click();
    cy.get('[data-cy="add-to-cart-button"]').eq(2).click();
    cy.get('[data-cy="add-to-cart-button"]').eq(5).click();
    cy.get('[data-cy="add-to-cart-button"]').eq(2).click();
    cy.get('[data-cy="cart-quantity"]').should("contain", 2);
  });
  // add testing coverage for fitering once that is implemented
  //add test for removal from cart
});
