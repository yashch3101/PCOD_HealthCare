const mongoose = require("mongoose");

const DailyProgressSchema = new mongoose.Schema({
  userId: String,
  date: String,
  completed: { type: Boolean, default: false },
  streak: { type: Number, default: 0 },
  badges: [String],
});

module.exports = mongoose.model("DailyProgress", DailyProgressSchema);