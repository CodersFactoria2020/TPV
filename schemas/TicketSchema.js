const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({name:String});
const ticket = mongoose.model('ticket', ticketSchema);

const ticket1 = new ticket({name:'ticket_1'});
ticket1.save(function (err,ticket1){
    if (err){
        return console.log(err)
    }

});

ticket.find({name:'ticket_1'},function (err,ticket){
    if (err){
        return console.log(err)
    }
    console.log(ticket)
});


ticket.deleteOne({
    _id : "5f4f69ba87e06523502b6597"
}, function(err) {
    if (err){
        return console.log(err);
    }
    console.log('Successfully! Product has been Deleted.');
});