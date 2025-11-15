const twilio = require("twilio");
require("dotenv").config();

const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

const sendCongratsSMS = async (to, name) => {
  try {
    await client.messages.create({
      body: `💪 You did it, ${name}! You’ve completed your exercise routine today. Keep your streak alive!`,
      from: process.env.TWILIO_PHONE_NUMBER,
      to,
    });
    console.log(`✅ SMS sent to ${name}`);
  } catch (error) {
    console.error("❌ Twilio error:", error.message);
  }
};

module.exports = sendCongratsSMS;