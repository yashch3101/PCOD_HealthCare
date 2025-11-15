import User from "../models/User.js";
import otpGenerator from "otp-generator";
import nodemailer from "nodemailer";

let otpStore = {};

// SEND OTP
export const sendOTP = async (req, res) => {
  const { email } = req.body;

  const otp = otpGenerator.generate(6, { upperCase: false });
  otpStore[email] = otp;

  console.log("OTP:", otp);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "your-email@gmail.com",
      pass: "your-app-password",
    },
  });

  await transporter.sendMail({
    from: "Verification",
    to: email,
    subject: "Your OTP Code",
    text: `Your OTP is ${otp}`,
  });

  res.json({ success: true, message: "OTP Sent" });
};

// VERIFY OTP
export const verifyOTP = async (req, res) => {
  const { email, enteredOtp } = req.body;

  if (otpStore[email] === enteredOtp) {
    delete otpStore[email];
    return res.json({ success: true });
  }

  res.json({ success: false, message: "Invalid OTP" });
};

// SAVE PROFILE
export const saveProfile = async (req, res) => {
  const { name, email, phone, location } = req.body;

  const user = await User.create({
    name,
    email,
    phone,
    location,
    profileImage: req.files.profileImage[0].path,
    govtIdImage: req.files.govtIdImage[0].path,
    isVerified: false,
  });

  res.json({ success: true, user });
};