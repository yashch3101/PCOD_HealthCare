// const Appointment = require("../models/Appointment");
// const Doctor = require("../models/Doctor");

// exports.getDoctorProfile = async (req, res) => {
//   res.json(req.doctor);
// };

// exports.getDoctorAppointments = async (req, res) => {
//   const appointments = await Appointment.find({ doctorId: req.doctor._id }).populate("userId");
//   res.json(appointments);
// };

// exports.setAvailability = async (req, res) => {
//   const { from, to, date } = req.body;
//   req.doctor.availableSlots.push({ from, to, date });
//   await req.doctor.save();
//   res.json({ message: "Availability updated", slots: req.doctor.availableSlots });
// };
const Doctor = require("../models/Doctor");

const addAvailability = async (req, res) => {
  try {
    const { doctorId, day, startTime, endTime } = req.body;

    // Find the doctor in the database
    const doctor = await Doctor.findById(doctorId);
    if (!doctor) {
      return res.status(404).json({ message: "Doctor not found" });
    }

    // Add the availability slot to the doctor's profile
    const newAvailability = {
      day,
      startTime,
      endTime,
    };

    doctor.availability.push(newAvailability);
    await doctor.save();

    return res.status(201).json(newAvailability);
  } catch (error) {
    console.error("Error adding availability:", error);
    return res.status(500).json({ message: "Failed to add availability" });
  }
};

module.exports = {
  addAvailability,
};
