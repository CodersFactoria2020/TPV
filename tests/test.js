var assert = require("chai").assert;
var chai = require("chai");
var chaiHttp = require("chai-http");
var ticket = require("../app/ticket.js");
var app = require("../app.js");
const { response } = require("../app.js");

chai.use(chaiHttp);

describe("tickets", function () {
  before(function () {
    ticketJson = require("./ticket.json");
  });
  describe("GET /tickets", function () {
    it("should return json with tickets", function () {
      chai
        .request(app)
        .get("/tickets")
        .end(function (err, res) {
          assert.equal(res.status, 200);
          assert.typeOf(res.body, "object");
          assert.include(res.body, { id: 1 });
        });
    });
  });
});
