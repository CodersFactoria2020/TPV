const assert = require("chai").assert;
const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app.js");
const { response } = require("../app.js");

const Product = require("../app/Product");

chai.use(chaiHttp);

describe("Product", function () {
    before(function (){
        product = new Product({name:'before'});
        product.save();
    });
    describe("ProductAPI", function () {

        it("should create when posting a json to /product", function () {
            chai
                .request(app)
                .post("/products/api")
                .send({name:'helado'})
                .end(function (err, res) {
                    assert.equal(res.status, 200);
                    assert.typeOf(res.body, "object");
                    assert.include(res.body, {name:'helado'});
                });
        });

        it("should find all products on a json to /product", function () {
            chai
                .request(app)
                .get("/products/api")
                .end(function (err, res) {
                    assert.equal(res.status, 200);
                    assert.typeOf(res.body, "array");
                });
        });

        it("should find a product by id on a json to /product", function () {
            chai
                .request(app)
                .get("/products/api/"+ product._id)
                .end(function (err, res) {
                    assert.equal(res.status, 200);
                    assert.include(res.body, { _id: `${product._id}`});
                    assert.typeOf(res.body, "object");
                });
        });

        it("should delete a product by id on a json to /product", function () {
            chai
                .request(app)
                .delete("/products/api/"+ product._id)
                .end(function (err, res) {
                    assert.equal(res.status, 200);
                    assert.notInclude(res.body, {_id: `${product._id}`});
                });
        });

    });
});