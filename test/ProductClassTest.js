
const Product = require("../app/ProductClass");
const assert = require("chai").assert;

describe("Product: ", function () {
  it("Check the returned product.name using: value.should.equal(value): ", function () {
    product = new Product("Cerveza", "1.5", 3, "Bebidas");
    productName = product.getName(product);
    assert.equal(productName, "Cerveza");
  });
  it("Check the returned product.price using: value.should.equal(value): ", function () {
    product = new Product("Cerveza", 3, 3, "Bebidas");
    productPrice = product.getPrice(product);

    assert.equal(productPrice, 3);
  });
  it("Check the returned product.quantity using: value.should.equal(value): ", function () {
    product = new Product("Cerveza", 3, 5, "Bebidas");
    productQuantity = product.getQuantity(product);

    assert.equal(productQuantity, 5);
  });
  it("Check the returned product.category using: value.should.equal(value): ", function () {
    product = new Product("Cerveza", 3, 5, "Bebidas");
    productCategory = product.getCategory(product);

    assert.equal(productCategory, "Bebidas");
  });
});
