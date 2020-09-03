const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema({ name: String });
const Ticket = mongoose.model("Ticket", productSchema);

module.exports = Ticket;

