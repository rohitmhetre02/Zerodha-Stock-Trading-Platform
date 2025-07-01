const express = require("express");
const router = express.Router();
const passport = require("passport");
const { signup, login, logout, checkAuth } = require("../controllers/authController");

router.post("/signup", signup);
router.post("/login", passport.authenticate("local"), login);
router.post("/logout", logout);
router.get("/check", checkAuth);

module.exports = router;
