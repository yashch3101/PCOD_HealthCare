import React, { useEffect, useRef, useState } from "react";
import * as faceapi from "face-api.js";
import { useNavigate } from "react-router-dom";

export default function FaceScan() {
  const videoRef = useRef(null);
  const [status, setStatus] = useState("Initializing camera...");
  const navigate = useNavigate();

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
      .then((stream) => {
        videoRef.current.srcObject = stream;
      })
      .catch((err) => {
        console.error("Camera error:", err);
        setStatus("Unable to access camera. Please allow permissions.");
      });
  };

  const handleVideoPlay = () => {
    setInterval(async () => {
      const detections = await faceapi
        .detectSingleFace(videoRef.current, new faceapi.TinyFaceDetectorOptions())
        .withAgeAndGender();

      if (detections) {
        const gender = detections.gender;
        console.log("Detected gender:", gender);

        if (gender === "female") {
          setStatus("✅ Verified as female! Redirecting...");
          setTimeout(() => navigate("/community-feed"), 1500);
        } else if (gender === "male") {
          setStatus("🚫 Access denied! Community is for women only.");
          setTimeout(() => navigate("/"), 2000);
        }
      } else {
        setStatus("No face detected. Please stay in front of camera.");
      }
    }, 2000);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-pink-300 to-blue-300">
      <h2 className="text-2xl font-bold text-white mb-4">🔍 Face Scan Verification</h2>
      <video
        ref={videoRef}
        autoPlay
        muted
        onPlay={handleVideoPlay}
        width="420"
        height="320"
        className="rounded-lg shadow-lg border-4 border-white"
      ></video>
      <p className="mt-4 text-lg font-semibold text-white">{status}</p>
    </div>
  );
}