const Doctor = require("../models/Doctor");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.registerDoctor = async (req, res) => {
  const { name, email, password, specialization, experience } = req.body;
  const existing = await Doctor.findOne({ email });
  if (existing) return res.status(400).json({ message: "Doctor already exists" });

  const hashedPassword = await bcrypt.hash(password, 10);
  const doctor = await Doctor.create({
    name,
    email,
    password: hashedPassword,
    specialization,
    experience,
  });

  res.status(201).json({ message: "Doctor registered" });
};

exports.loginDoctor = async (req, res) => {
  const { email, password } = req.body;
  const doctor = await Doctor.findOne({ email });
  if (!doctor) return res.status(400).json({ message: "Doctor not found" });

  const isMatch = await bcrypt.compare(password, doctor.password);
  if (!isMatch) return res.status(401).json({ message: "Incorrect password" });

  const token = jwt.sign({ id: doctor._id }, process.env.JWT_SECRET, { expiresIn: "7d" });
  res.json({ token, doctorId: doctor._id });
};
