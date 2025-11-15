const express = require("express");
const router = express.Router();
const DailyProgress = require("../models/DailyProgress");
const sendCongratsSMS = require("../utils/sendCongratsSMS");

router.post("/complete", async (req, res) => {
  try {
    const { userId } = req.body;
    const today = new Date().toISOString().split("T")[0];

    let record = await DailyProgress.findOne({ userId, date: today });

    if (!record) {
      record = new DailyProgress({ userId, date: today, completed: true });
    } else {
      record.completed = true;
    }

    const yesterday = new Date(Date.now() - 86400000).toISOString().split("T")[0];
    const yesterdayRecord = await DailyProgress.findOne({ userId, date: yesterday });

    if (yesterdayRecord && yesterdayRecord.completed) {
      record.streak = (yesterdayRecord.streak || 0) + 1;
    } else {
      record.streak = 1;
    }

    record.badges = [];
    if (record.streak >= 3) record.badges.push("Consistency Queen 👑");
    if (record.streak >= 7) record.badges.push("Fitness Champion 🏅");
    if (record.streak >= 30) record.badges.push("Cycle Streak Hero 🚀");

    await record.save();
    await sendCongratsSMS("+919336686858", "Anshi");
    res.json({ message: "Progress updated", record });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to update progress" });
  }
});

router.get("/:userId", async (req, res) => {
  try {
    const records = await DailyProgress.find({ userId: req.params.userId });
    res.json(records);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch progress" });
  }
});

module.exports = router;