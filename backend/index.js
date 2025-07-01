require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
const bodyParser = require("body-parser");

const authRoutes = require("./routes/authRoutes");
const fundRoutes = require("./routes/fundRoutes");
const holdingsRoutes = require("./routes/holdingsRoutes");
const orderRoutes = require("./routes/orderRoutes");
const positionRoutes = require("./routes/positionRoutes");
const User = require("./models/UserSchema");

mongoose.connect(process.env.MONO_URL)
  .then(() => console.log("DB Connected"))
  .catch(err => console.error("DB connection error:", err));

app.use(cors({
  origin: [process.env.VITE_FRONTEND_URL, process.env.VITE_DASHBOARD_URL],
  credentials: true,
}));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
}));

app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use("/", (req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  next();
});


app.use("/", authRoutes);
app.use("/funds", fundRoutes);
app.use("/allHoldings", holdingsRoutes);
app.use("/allpositions", positionRoutes);

app.use("/orders", orderRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
