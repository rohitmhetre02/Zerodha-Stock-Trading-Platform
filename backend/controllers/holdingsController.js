const Holdings = require("../models/HoldingsSchema");

exports.getAllHoldings = async (req, res) => {
  const allHoldings = await Holdings.find({});
  res.json(allHoldings);
};
