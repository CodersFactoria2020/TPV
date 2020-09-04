const express = require("express");
const { route } = require(".");
const Ticket = require("../app/Ticket");


const router = express.Router();


router.get("/", function (req, res, next) {
  res.render("ticket", { title: "Subido ticket" });
});

router.post("/api", function (req, res, next) {
  const ticket = new Ticket(req.body);
  ticket.save(function (err, ticket) {
    if (err) {
      return console.log(err);
    }
  });
  res.json(ticket);
});

router.get("/api", function (req, res, next) {
  Ticket.find({},function (err, tickets){
    if (err){
      return console.log(err)
    }
    res.json(tickets);
  });

});

router.get("/api/:id", function (req, res, next) {
  Ticket.findById( req.params.id,function (err, tickets){
    if (err){
      return console.log(err)
    }
    res.json(tickets);
  });

});

router.delete("/api/:id", function (req, res, next) {
  Ticket.deleteOne({_id: req.params.id}, function(err) {
    if (err){
      return console.log(err);
    }
    Ticket.find({},function (err, tickets){
      if (err){
        return console.log(err)
      }
      res.json(tickets);
    });
  });

});





module.exports = router;
