const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  location: String,
  profileImage: String,
  govtIdImage: String,
  gender: { type: String, default: "female" },
  isVerified: { type: Boolean, default: false },
});

module.exports = mongoose.model("User", userSchema);