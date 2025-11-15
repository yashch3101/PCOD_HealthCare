import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaHeartbeat, FaHandsHelping } from 'react-icons/fa';
import { GiHealthNormal } from 'react-icons/gi';

const Hero = () => {
  const features = [
    { 
      icon: <FaHeartbeat className="text-3xl text-pink-500" />, 
      title: "Personalized Care",
      description: "Tailored health solutions for your unique needs"
    },
    { 
      icon: <GiHealthNormal className="text-3xl text-purple-500" />, 
      title: "Expert Guidance",
      description: "Professional advice from healthcare specialists"
    },
    { 
      icon: <FaHandsHelping className="text-3xl text-blue-500" />, 
      title: "24/7 Support",
      description: "We're here for you whenever you need us"
    }
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-purple-50 to-white">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Your Health Journey, <span className="text-purple-600">Our Priority</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Empowering women with personalized healthcare solutions, expert advice, and a supportive community.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <button className="px-8 py-3 bg-purple-600 text-white rounded-full font-medium hover:bg-purple-700 transition duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="px-8 py-3 border-2 border-purple-600 text-purple-600 rounded-full font-medium hover:bg-purple-50 transition duration-300 transform hover:scale-105">
                Learn More
              </button>
            </motion.div>

            {/* Feature Icons */}
            <motion.div 
              className="mt-12 grid grid-cols-3 gap-6 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  className="text-center p-4 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
                  whileHover={{ y: -5 }}
                >
                  <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center rounded-full bg-purple-50">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold text-gray-800">{feature.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/images/hero-image.jpg" 
                alt="Happy woman with healthcare professional" 
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
            <div className="absolute -top-6 -right-6 w-40 h-40 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
            <div className="absolute -bottom-8 right-20 w-24 h-24 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
