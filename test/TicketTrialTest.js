const assert = require("chai").assert;
const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app.js");
const { response } = require("../app.js");

const Ticket = require("../app/Ticket");

chai.use(chaiHttp);

describe("Ticket", function () {
    before(function (){
        ticket = new Ticket({name:'before-ticket'});
        ticket.save();
    });
  describe("ProductAPI", function () {

    it("should create a ticket on a json to /tickets", function () {
      chai
        .request(app)
        .post("/tickets")
        .send({name:'ticket_1'})
        .end(function (err, res) {
          assert.equal(res.status, 200);
          assert.typeOf(res.body, "object");
          assert.include(res.body, {name:'ticket_1'});
        });

    });

    it("should find all tickets on a json to /tickets", function () {
        chai
            .request(app)
            .get("/tickets/api")
            .end(function (err, res) {
                assert.equal(res.status, 200);
                assert.typeOf(res.body, "array");
                 });
    });

      it("should find a ticket by id on a json to /ticket", function () {
          chai
              .request(app)
              .get("/tickets/api/"+ ticket._id)
              .end(function (err, res) {
                  assert.equal(res.status, 200);
                  assert.include(res.body, { _id: `${ticket._id}`});
                  assert.typeOf(res.body, "object");
              });
      });

      it("should delete a ticket by id on a json to /ticket", function () {
          chai
              .request(app)
              .delete("/tickets/api/"+ ticket._id)
              .end(function (err, res) {
                  assert.equal(res.status, 200);
                  assert.notInclude(res.body, {_id: `${ticket._id}`});
              });
      });

  });
});
