const Doctor = require("../models/Doctor");
const Appointment = require("../models/Appointment");

exports.getDoctors = async (req, res) => {
  const doctors = await Doctor.find();
  res.json(doctors);
};

exports.bookAppointment = async (req, res) => {
  const { doctorId, date } = req.body;
  const newAppt = await Appointment.create({
    userId: req.user.id,
    doctorId,
    date,
  });
  res.status(201).json(newAppt);
};

exports.getMyAppointments = async (req, res) => {
  const appointments = await Appointment.find({ userId: req.user.id }).populate("doctorId");
  res.json(appointments);
};
