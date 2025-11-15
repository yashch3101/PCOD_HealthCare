const mongoose = require("mongoose");

const storySchema = new mongoose.Schema({
  userName: { type: String, required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  image: { type: String },
  isPublic: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Story", storySchema);