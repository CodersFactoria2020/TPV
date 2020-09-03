const express = require("express");
const { route } = require(".");
const Product = require("../app/Product");


const router = express.Router();


router.get("/", function (req, res, next) {
  res.render("product", { title: "Subido product" });
});

router.post("/api", function (req, res, next) {
  const product = new Product(req.body);
  product.save(function (err, product) {
    if (err) {
      return console.log(err);
    }
  });
  res.json(product);
});

router.get("/api", function (req, res, next) {
  Product.find({},function (err,products){
    if (err){
      return console.log(err)
    }
    res.json(products);
  });

});

router.get("/api/:id", function (req, res, next) {
  Product.findById( req.params.id,function (err,products){
    if (err){
      return console.log(err)
    }
    res.json(products);
  });

});

router.delete("/api/:id", function (req, res, next) {
  Product.deleteOne({_id: req.params.id}, function(err) {
    if (err){
      return console.log(err);
    }
    Product.find({},function (err,products){
      if (err){
        return console.log(err)
      }
      res.json(products);
    });
  });

});





module.exports = router;
