import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  MdMedicalServices,
  MdOutlineHealthAndSafety,
} from "react-icons/md";
import {
  FaHeartbeat,
  FaHeart,
  FaHandHoldingHeart,
  FaAppleAlt,
} from "react-icons/fa";

const FacilitiesPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const icons = [
    {
      id: 1,
      icon: <MdMedicalServices />,
      className: "top-[10%] left-[10%] md:left-[22%]",
    },
    {
      id: 2,
      icon: <FaHeart />,
      className: "top-[10%] right-[10%] md:right-[22%]",
    },
    {
      id: 3,
      icon: <MdOutlineHealthAndSafety />,
      className: "top-[38%] right-[6%] md:right-[16%]",
    },
    {
      id: 4,
      icon: <FaHeartbeat />,
      className: "bottom-[10%] right-[10%] md:right-[23%]",
    },
    {
      id: 5,
      icon: <FaHandHoldingHeart />,
      className: "bottom-[10%] left-[10%] md:left-[23%]",
    },
    {
      id: 6,
      icon: <FaAppleAlt />,
      className: "top-[38%] left-[6%] md:left-[18%]",
    },
  ];

  return (
    <div
      ref={ref}
      className="relative w-full h-screen flex items-center justify-center px-4 overflow-hidden"
      style={{
        background: "radial-gradient(circle at center, #d2ecfa 0%, #ffffff 80%)",
        height: "100vh",
      }}
    >
      {/* Floating Icons with Animations */}
      {icons.map((item) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: item.id * 0.2 }}
          className={`absolute ${item.className} text-3xl sm:text-4xl md:text-5xl hover:scale-110 z-10 text-pink-400`}
        >
          {item.icon}
        </motion.div>
      ))}

      {/* Central Content */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} 
        transition={{ duration: 1 }}
        className="text-center max-w-xl md:max-w-2xl px-4 z-20"
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-indigo-900 mb-4 leading-tight">
          Dedicated to women’s
          <br />
          wellness through reliable information,
        </h1>
        <p className="text-indigo-800/70 text-sm sm:text-base md:text-lg leading-relaxed">
          We believe in empowering women with accurate resources, emotional support, and innovative care solutions to build a healthier tomorrow.
          <br />
          Metus dictum at tempor commodo consectetur.
        </p>
      </motion.div>
    </div>
  );
};

export default FacilitiesPage;
