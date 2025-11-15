const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  specialization: String,
  experience: String,
  availableSlots: [
    {
      
      from: String, // e.g., "10:00 AM"
      to: String,   // e.g., "12:00 PM"
      date: String, // optional: "2025-05-09"
    },
  ],
});

module.exports = mongoose.model("Doctor", doctorSchema);
