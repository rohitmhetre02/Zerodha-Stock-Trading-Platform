const express = require("express");
const router = express.Router();
const isLoggedIn = require("../middleware/isLoggedIn");
const {  createOrder, getOrders } = require("../controllers/orderController");

router.post("/newOrder", isLoggedIn, createOrder);
router.get("/", isLoggedIn, getOrders);

module.exports = router;
