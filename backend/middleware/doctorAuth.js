const jwt = require("jsonwebtoken");
const Doctor = require("../models/Doctor");

const doctorAuth = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "No token provided" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.doctor = await Doctor.findById(decoded.id);
    next();
  } catch (err) {
    res.status(401).json({ message: "Token is not valid" });
  }
};

module.exports = doctorAuth;
