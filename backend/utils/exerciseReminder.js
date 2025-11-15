const cron = require("node-cron");
const twilio = require("twilio");
require("dotenv").config();

const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

const users = [
  { name: "Anshi", phone: "+919336686858", time: "10:00" },
];

cron.schedule("* * * * *", async () => {
  const now = new Date();
  const currentTime = now.toTimeString().slice(0, 5);

  users.forEach(async (user) => {
    if (user.time === currentTime) {
      try {
        await client.messages.create({
          body: `💪 Hi ${user.name}! It’s time for your daily workout — stay consistent and complete your exercises on SheHelp 💜`,
          from: process.env.TWILIO_PHONE_NUMBER,
          to: user.phone,
        });
        console.log(`✅ Sent reminder to ${user.name}`);
      } catch (err) {
        console.error("❌ Twilio error:", err.message);
      }
    }
  });
});