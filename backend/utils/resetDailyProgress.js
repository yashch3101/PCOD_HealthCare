const cron = require("node-cron");
const DailyProgress = require("../models/DailyProgress");

cron.schedule("0 0 * * *", async () => {
  console.log("🕛 Resetting daily progress...");
  try {
    const today = new Date().toISOString().split("T")[0];
    const allUsers = await DailyProgress.distinct("userId");

    for (const userId of allUsers) {
      const record = await DailyProgress.findOne({ userId, date: today });
      if (!record) {
        await DailyProgress.create({ userId, date: today, completed: false });
      }
    }
  } catch (err) {
    console.error("Reset failed:", err);
  }
});