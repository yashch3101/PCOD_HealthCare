const express = require("express");
const router = express.Router();
const Appointment = require("../models/Appointment");

router.get("/:userId", async (req, res) => {
  const appointments = await Appointment.find({ userId: req.params.userId });
  res.json(appointments);
});

router.post("/", async (req, res) => {
  const newAppt = new Appointment(req.body);
  await newAppt.save();
  res.json(newAppt);
});

router.put("/:id", async (req, res) => {
  const updated = await Appointment.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

router.delete("/:id", async (req, res) => {
  await Appointment.findByIdAndDelete(req.params.id);
  res.json({ message: "Appointment cancelled" });
});

module.exports = router;