const CommunityPost = require("../models/CommunityPost");

exports.getPosts = async (req, res) => {
  try {
    const posts = await CommunityPost.find().sort({ createdAt: -1 });
    res.json(posts);
  } catch (err) {
    console.error("Fetch posts error:", err);
    res.status(500).json({ error: "Failed to fetch posts" });
  }
};

exports.createPost = async (req, res) => {
  try {
    const { category, content, tags, authorName } = req.body;

    const gender = req.headers["x-user-gender"] || "unknown";
    console.log("Gender received from frontend:", gender);
    if (gender !== "female") {
      return res.status(403).json({ message: "Only women can post in this community" });
    }

    const post = new CommunityPost({
      author: {
        name: authorName || "Anonymous",
        avatar: "https://via.placeholder.com/40",
      },
      category,
      content,
      tags,
      createdAt: new Date(),
    });

    await post.save();
    res.status(201).json(post);
  } catch (err) {
    console.error("Post creation error:", err);
    res.status(500).json({ error: "Failed to create post" });
  }
};