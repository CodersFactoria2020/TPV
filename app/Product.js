

const productSchema = new mongoose.Schema({name:String});
const product = mongoose.model('product',productSchema);

const milk = new product({name:'milk'});
milk.save(function (err,milk){
    if (err){
        return console.log(err)
    }

});