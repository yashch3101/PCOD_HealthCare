const mongoose = require("mongoose");

const communityPostSchema = new mongoose.Schema(
  {
    author: {
      id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      name: String,
      avatar: String,
    },
    category: String,
    content: String,
    tags: [String],
    likes: { type: Number, default: 0 },
    comments: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("CommunityPost", communityPostSchema);