const express = require("express");
const router = express.Router();
const isLoggedIn = require("../middleware/isLoggedIn");
const { addFunds, withdrawFunds, getBalance } = require("../controllers/fundController");

router.post("/add", isLoggedIn, addFunds);
router.post("/withdraw", isLoggedIn, withdrawFunds);
router.get("/balance", isLoggedIn, getBalance);

module.exports = router;
