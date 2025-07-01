const express = require("express");
const router = express.Router();
const isLoggedIn = require("../middleware/isLoggedIn");
const { getAllPositions} = require("../controllers/positionController");


router.get("/", getAllPositions);

module.exports = router;