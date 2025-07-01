exports.addFunds = async (req, res) => {
  const { amount } = req.body;
  try {
    req.user.balance += Number(amount);
    await req.user.save();
    res.json({ message: "Funds added", balance: req.user.balance });
  } catch {
    res.status(500).json({ error: "Failed to add funds" });
  }
};

exports.withdrawFunds = async (req, res) => {
  const amt = Number(req.body.amount);
  try {
    if (req.user.balance >= amt) {
      req.user.balance -= amt;
      await req.user.save();
      res.json({ message: "Withdrawal successful", balance: req.user.balance });
    } else {
      res.status(400).json({ error: "Insufficient balance" });
    }
  } catch {
    res.status(500).json({ error: "Failed to withdraw" });
  }
};

exports.getBalance = (req, res) => {
  res.json({ balance: req.user.balance });
};
