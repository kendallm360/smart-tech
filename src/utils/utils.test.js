const addToCart = require("./utils");

test("items can be added to the cart", () => {
  expect(
    addToCart({
      id: 22233,
      name: "New Ipad",
      image: "",
      price: 499.99,
      quantity: 1,
      category: "Tablets",
      modelNumber: 22543,
    })
  ).toBe([
    {
      id: 22233,
      name: "New Ipad",
      image: "",
      price: 499.99,
      quantity: 1,
      category: "Tablets",
      modelNumber: 22543,
    },
  ]);
});
