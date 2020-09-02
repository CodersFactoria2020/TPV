var assert = require("chai").assert;
var chai = require("chai");
var chaiHttp = require("chai-http");
var app = require("../app.js");
const { response } = require("../app.js");

var Product = require("../app/Product");

chai.use(chaiHttp);

describe("Product", function () {
  describe("ProductAPI", function () {
    it("should create when posting a json to /product", function () {
      chai
        .request(app)
        .post("/products")
        .send({ name: "milk" })
        .end(function (err, res) {
          assert.equal(res.status, 200);
          assert.typeOf(res.body, "object");
          assert.include(res.body, { name: "milk" });
        });
    });
  });
});
