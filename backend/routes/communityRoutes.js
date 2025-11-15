const express = require("express");
const router = express.Router();
const Message = require("../models/Message");
const { getPosts, createPost } = require("../controllers/communityController");

router.get("/", getPosts);
router.post("/", createPost);

router.get("/messages", async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: 1 });
    res.json(messages);
  } catch (error) {
    console.error("Message fetch error:", error);
    res.status(500).json({ error: "Failed to fetch messages" });
  }
});

module.exports = router;
