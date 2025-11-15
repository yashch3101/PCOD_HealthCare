const express = require("express");
const Story = require("../models/Story");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { userName, title, content, image, isPublic } = req.body;
    if (!userName || !title || !content) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const newStory = new Story({ userName, title, content, image, isPublic });
    await newStory.save();

    res.status(201).json({ message: "Story created successfully", story: newStory });
  } catch (error) {
    console.error("Story creation error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const stories = await Story.find().sort({ createdAt: -1 });
    res.status(200).json(stories);
  } catch (error) {
    console.error("Error fetching stories:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
