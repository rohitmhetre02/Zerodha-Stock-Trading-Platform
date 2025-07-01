const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PositionsSchema = new Schema({
  product: String,
  name: String,
  qty: Number,
  avg: Number,
  price: Number,
  net: String,
  day: String,
  isLoss: Boolean,
});

const Positions = mongoose.models.positions || mongoose.model("positions", PositionsSchema);
module.exports = Positions;
