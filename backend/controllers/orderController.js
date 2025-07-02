const Holdings = require("../models/HoldingsSchema");
const Order = require("../models/OrdersSchema");
const User = require("../models/UserSchema");



exports.createOrder = async (req, res) => {
  const { name, qty, price, mode } = req.body;
  if (!req.user || !req.user._id) return res.status(401).send("Unauthorized");
  if (!name || !qty || !price || !mode) return res.status(400).send("Missing required fields.");
  const total = qty * price;
  try {
    const user = await User.findById(req.user._id);
    if (!user) return res.status(404).send("User not found");
    let holding = await Holdings.findOne({ name, user: user._id });
    if (mode === "BUY") {
      if (user.balance < total)
        return res.status(400).send("Insufficient funds in your wallet to buy.");
      if (holding) {
        const totalQty = holding.qty + qty;
        holding.avg = (holding.avg * holding.qty + price * qty) / totalQty;
        holding.qty = totalQty;
      } else {
       holding = new Holdings({
  user: user._id,
  name,
  qty,
  avg: price,
  price,
  net: "0.00",
  day: "0.00%"
});

      }
      holding.price = price;
      const currentValue = holding.qty * price;
      const cost = holding.qty * holding.avg;
      const profit = currentValue - cost;
      holding.net = profit.toFixed(2);
      holding.day = ((profit / cost) * 100).toFixed(2) + "%";
      await holding.save();
      user.balance -= total;
      await user.save();
    }
    if (mode === "SELL") {
      if (!holding || holding.qty < qty)
        return res.status(400).send("Not enough shares available to sell.");
      holding.qty -= qty;
      if (holding.qty === 0) {
        await holding.deleteOne();
      } else {
        holding.price = price;
        const currentValue = holding.qty * price;
        const cost = holding.qty * holding.avg;
        const profit = currentValue - cost;
        holding.net = profit.toFixed(2);
        holding.day = ((profit / cost) * 100).toFixed(2) + "%";
        await holding.save();  }
      user.balance += total;
      await user.save();  }
    const order = new Order({ user: user._id, name, qty, price, ltp: price,mode, });
    await order.save();
    res.send(`${mode} order successful.`);
  } catch (err) {
    console.error("Order error:", err);
    res.status(500).send("Server error"); }
};

exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find({
      user: req.user._id,
      mode: { $in: ["BUY", "SELL"] },
    });
    res.json(orders);
  } catch (err) {
    console.error("Error fetching orders:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};