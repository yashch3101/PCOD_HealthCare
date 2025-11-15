import React, { useEffect, useRef, useState } from "react";
import * as faceapi from "face-api.js";

export default function GenderScan({ onVerified }) {
  const videoRef = useRef(null);
  const [status, setStatus] = useState("Loading models...");

  useEffect(() => {
    const loadModels = async () => {
      const MODEL_URL = "/models";
      await Promise.all([
        faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
        faceapi.nets.ageGenderNet.loadFromUri(MODEL_URL),
      ]);
      startVideo();
    };
    loadModels();
  }, []);

  const startVideo = () => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => (videoRef.current.srcObject = stream))
      .catch(() => setStatus("❌ Please allow camera access."));
  };

  const handleVideoPlay = () => {
    const interval = setInterval(async () => {
      const detection = await faceapi
        .detectSingleFace(videoRef.current, new faceapi.TinyFaceDetectorOptions())
        .withAgeAndGender();

      if (detection) {
        const gender = detection.gender;
        if (gender === "female") {
          const name = prompt("✅ Verified! Please enter your name:");
          setStatus("✅ Verified as Female! Redirecting...");
          localStorage.setItem("gender", "female");
          localStorage.setItem("token", "dummy-female-token");
          localStorage.setItem("username", name || "Anonymous");
          clearInterval(interval);
          onVerified(true);
        } else if (gender === "male") {
          setStatus("🚫 Access Denied! Women only community.");
          localStorage.setItem("gender", "male");
          clearInterval(interval);
          onVerified(false);
        }
      } else {
        setStatus("No face detected. Please stay in frame.");
      }
    }, 2000);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-pink-400 to-blue-400">
      <h2 className="text-2xl font-bold text-white mb-3">🔍 Face Verification</h2>
      <video
        ref={videoRef}
        onPlay={handleVideoPlay}
        autoPlay
        muted
        width="420"
        height="320"
        className="rounded-lg shadow-lg border-4 border-white"
      ></video>
      <p className="mt-4 text-lg text-white font-semibold">{status}</p>
    </div>
  );
}