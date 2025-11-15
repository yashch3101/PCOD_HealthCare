const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const User = require("../models/User");

router.post("/verify-gender", auth, async (req, res) => {
  try {
    const { genderDetected } = req.body;

    if (!genderDetected) {
      return res.status(400).json({ message: "Gender detection result missing" });
    }

    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.genderDetected = genderDetected;
    user.genderVerified = genderDetected === "female";
    await user.save();

    res.json({
      success: true,
      gender: genderDetected,
      message:
        genderDetected === "female"
          ? "Gender verified successfully!"
          : "Access limited for male users.",
    });
  } catch (err) {
    console.error("Verify-gender error:", err);
    res.status(500).json({ message: "Failed to verify gender" });
  }
});

module.exports = router;