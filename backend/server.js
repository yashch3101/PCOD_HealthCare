require("dotenv").config();
require("./utils/exerciseReminder");
const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const mongoose = require("mongoose");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
connectDB();

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "x-user-gender"],
  })
);
app.use(express.json());
app.use("/uploads", express.static("uploads"));

const uri = process.env.MONGO_URI

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err))


app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/appointments", require("./routes/appointments"));
app.use("/api/community", require("./routes/communityRoutes"));
app.use("/api/doctor/auth", require("./routes/doctorAuthRoutes"));
app.use("/api/doctor", require("./routes/doctorRoutes"));
app.use("/api/progress", require("./routes/progressRoutes"));
app.use("/api/stories", require("./routes/storyRoutes"));

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(" User connected:", socket.id);

  socket.on("joinCommunity", (user) => {
    if (!user || user.gender !== "female") {
      socket.emit("errorMessage", "Only women are allowed to join this community.");
      socket.disconnect();
      return;
    }

    socket.join("women-community");
    console.log(`${user.name} joined the women community`);
  });

  socket.on("sendMessage", async (data) => {
    const { name, message, gender } = data;

    if (gender !== "female") {
      socket.emit("errorMessage", "Access denied. Only women can chat.");
      return;
    }

    const Message = require("./models/Message");
    const newMessage = new Message({ name, message });
    await newMessage.save();

    io.to("women-community").emit("receiveMessage", newMessage);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

app.get("/", (req, res) => res.send("🚀 SheHelp backend running"));

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

require("./utils/resetDailyProgress");