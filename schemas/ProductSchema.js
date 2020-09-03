const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({name:String});
const product = mongoose.model('product',productSchema);

const milk = new product({name:'milk'});
milk.save(function (err,milk){
    if (err){
        return console.log(err)
    }

});

product.find({name:'milk'},function (err,product){
    if (err){
        return console.log(err)
    }
    console.log(product)
});


product.deleteOne({
    _id : "5f4f69ba87e06523502b6597"
}, function(err) {
    if (err){
        return console.log(err);
    }
    console.log('Successfully! Product has been Deleted.');
});