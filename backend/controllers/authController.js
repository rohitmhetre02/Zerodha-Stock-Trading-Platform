const User = require("../models/UserSchema");

exports.signup = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    const newUser = new User({ username, email, balance: 0 });
    const registeredUser = await User.register(newUser, password);
    req.login(registeredUser, (err) => {
      if (err) return next(err);
      return res.status(200).json({ message: "Welcome to Dashboard!" });
    });
  } catch (e) {
    return res.status(400).json({ error: e.message });
  }
};

exports.login = (req, res) => {
  res.status(200).json({ message: "Welcome to the platform!" });
};

exports.logout = (req, res) => {
  req.logout((err) => {
    if (err) return res.status(500).json({ error: "Logout failed!" });
    res.clearCookie("connect.sid");
    res.status(200).json({ message: "Logged out successfully" });
  });
};

exports.checkAuth = (req, res) => {
  if (req.isAuthenticated()) {
    res.json({ loggedIn: true, user: req.user });
  } else {
    res.json({ loggedIn: false });
  }
};
