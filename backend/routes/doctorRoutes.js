// 
// routes/doctorRoutes.js
const express = require("express")
const router = express.Router()
const Doctor = require("../models/Doctor")

// POST /api/doctor/availability
router.post("/availability", async (req, res) => {
  const { doctorId, day, startTime, endTime } = req.body

  if (!doctorId || !day || !startTime || !endTime) {
    return res.status(400).json({ error: "Missing fields" })
  }

  try {
    const doctor = await Doctor.findById(doctorId)

    if (!doctor) {
      return res.status(404).json({ error: "Doctor not found" })
    }

    const newAvailability = { day, startTime, endTime }

    doctor.availability.push(newAvailability)
    await doctor.save()

    // Send back the last inserted availability
    res.status(201).json(doctor.availability[doctor.availability.length - 1])
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: "Server error" })
  }
})

module.exports = router
