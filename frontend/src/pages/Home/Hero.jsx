import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaHeartbeat, FaHandsHelping } from 'react-icons/fa';
import { GiHealthNormal } from 'react-icons/gi';

// Import optimized images
import heroImage from '../../assets/hero-image.jpg';
import testimonial1 from '../../assets/testimonial1.jpg';
import testimonial2 from '../../assets/testimonial2.jpg';
import testimonial3 from '../../assets/testimonial3.jpg';

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

  const testimonials = [
    {
      image: testimonial1,
      text: "After struggling in silence with PCOS for years, I finally found a place where I felt heard and supported.",
      name: "Sarah K.",
      role: "PCOS Warrior"
    },
    {
      image: testimonial2,
      text: "The guidance I received during my pregnancy journey was invaluable. Thank you for being my support system.",
      name: "Priya M.",
      role: "New Mom"
    },
    {
      image: testimonial3,
      text: "This platform made me realize I'm not alone in my menopause journey. The community is amazing!",
      name: "Anita R.",
      role: "Menopause Advocate"
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
              Empowering women with personalized healthcare solutions, expert advice, and a supportive community at every stage of life.
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
              className="mt-12 flex flex-col gap-4 max-w-2xl mx-auto lg:mx-0"
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
            <div className="relative z-20 rounded-2xl overflow-hidden shadow-2xl w-full h-96">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=900&fit=crop"
                alt="Happy woman consulting with a healthcare professional"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
            {/* Blob decorative elements - commented out to show image clearly */}
            {/* <div className="absolute z-0 -bottom-6 -left-6 w-32 h-32 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div> */}
            {/* <div className="absolute z-0 -top-6 -right-6 w-40 h-40 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div> */}
            {/* <div className="absolute z-0 -bottom-8 right-20 w-24 h-24 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div> */}
          </motion.div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Stories of Hope & Healing
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Real experiences from our community members
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <FaQuoteLeft className="text-gray-300 text-2xl mb-2" />
                    <p className="text-gray-600 italic">"{testimonial.text}"</p>
                  </div>
                  <div className="flex items-center">
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-purple-600">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
