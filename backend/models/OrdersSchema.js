
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrdersSchema = new Schema({
   user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  name: String,
  qty: Number,
  price: Number,
  mode: {
    type: String,
    enum: ["BUY", "SELL"],
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Order = mongoose.model("orders", OrdersSchema);
module.exports = Order;

