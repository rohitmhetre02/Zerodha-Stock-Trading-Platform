const Position = require("../models/PositionsSchema");

exports.getAllPositions = async (req, res) => {
  const allPositions = await Position.find({});
  res.json(allPositions);
};