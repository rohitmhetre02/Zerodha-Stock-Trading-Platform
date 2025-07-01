const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  balance: {
    type: Number,
    default: 0,
  },
});

UserSchema.plugin(passportLocalMongoose);


const User = mongoose.models.User || mongoose.model("User", UserSchema);

module.exports = User;
