import React from "react";

export default function ExerciseVideoDemo({ videoSrc, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-4 w-[90%] md:w-[60%] shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-700 text-xl font-bold hover:text-red-500"
        >
          ✕
        </button>
        <video
          src={videoSrc}
          controls
          autoPlay
          className="w-full rounded-lg"
        ></video>
      </div>
    </div>
  );
}