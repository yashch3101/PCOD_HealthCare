import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaHeartbeat, FaHandsHelping, FaClinicMedical, FaUserMd, FaMobileAlt } from 'react-icons/fa';
import { GiHealthNormal } from 'react-icons/gi';
import { Link } from "react-router-dom";
import NiraChatbot from "@/components/NiraChatbot";
import communityImg from '../../assets/community.png';

const Home = () => {
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

  const services = [
    {
      icon: <FaClinicMedical className="text-4xl text-purple-600" />,
      title: 'Pregnancy Care',
      description: 'Comprehensive care and support throughout your pregnancy journey with expert guidance.',
      link: '/pregnancy'
    },
    {
      icon: <FaUserMd className="text-4xl text-pink-500" />,
      title: 'PCOS Management',
      description: 'Personalized plans and expert advice for managing PCOS effectively.',
      link: '/pcod-pcos'
    },
    {
      icon: <FaMobileAlt className="text-4xl text-blue-500" />,
      title: 'Menopause Support',
      description: 'Guidance and community support for women going through menopause.',
      link: '/menopause'
    }
  ];

  const communityStats = [
    { count: "10K+", label: "Active Members" },
    { count: "100+", label: "Expert Doctors" },
    { count: "24/7", label: "Support" }
  ];

  return (
    <div className="min-h-screen w-full bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-purple-50 to-white">
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
                Empowering women with personalized healthcare solutions and a supportive community for all stages of life.
              </motion.p>

              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Link to="/pcod-pcos">
                <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105">
                  Get Started
                </button>
                </Link>
                <button className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 font-semibold py-3 px-8 rounded-full transition duration-300">
                  Learn More
                </button>
              </motion.div>

              <div className="mt-12 grid grid-cols-3 gap-4 max-w-md">
                {features.map((feature, index) => (
                  <motion.div 
                    key={index}
                    className="bg-white p-4 rounded-xl shadow-sm"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + (index * 0.1) }}
                  >
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-purple-50 mb-2">
                        {feature.icon}
                      </div>
                      <h3 className="font-semibold text-gray-800">{feature.title}</h3>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Happy woman" 
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg z-20">
                <div className="flex items-center">
                  <div className="bg-purple-100 p-3 rounded-lg mr-4">
                    <FaQuoteLeft className="text-purple-500 text-2xl" />
                  </div>
                  <div>
                    <p className="font-semibold">Join thousands of women</p>
                    <p className="text-sm text-gray-600">who trust us with their health journey</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <div className="w-20 h-1 bg-purple-600 mx-auto"></div>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive healthcare solutions designed specifically for women's unique needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-purple-50 mb-6 mx-auto">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <Link
                    to={service.link}
                    className="text-purple-600 hover:text-purple-800 font-medium inline-flex items-center group"
                  >
                    Learn more
                    <svg
                      className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-16 bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Join Our Supportive <span className="text-purple-600">Community</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
                Connect with thousands of women who understand your journey. Share experiences, get support, and find your tribe.
              </p>
              
              <div className="flex flex-wrap gap-6 justify-center lg:justify-start mb-8">
                {communityStats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-purple-600">{stat.count}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>

              <Link to="/community">
                <button className="bg-orange-400 hover:bg-orange-500 text-white font-semibold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105">
                  Join Now
                </button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="relative">
                <img
                  src={communityImg || "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"}
                  alt="Community of women"
                  className="rounded-xl shadow-xl w-full max-w-lg h-auto"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg z-10">
                  <div className="flex items-center">
                    <div className="bg-orange-100 p-2 rounded-lg mr-3">
                      <FaHandsHelping className="text-orange-500 text-xl" />
                    </div>
                    <div>
                      <p className="font-semibold">Supportive Network</p>
                      <p className="text-sm text-gray-600">Always here for you</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cycle Tracker Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="order-2 lg:order-1"
            >
              <img 
                src="https://s.guavahealth.com/article-img/period-fertility-tracking/cycle_diagram.svg" 
                alt="Cycle tracking" 
                className="rounded-xl shadow-xl w-full h-auto"
              />
            </motion.div>
            
            <motion.div 
              className="order-1 lg:order-2 text-center lg:text-left"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Track Your <span className="text-pink-500">Menstrual Cycle</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
                Understand your body better with our easy-to-use cycle tracker. Predict your periods, track symptoms, and gain insights into your reproductive health.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  "Predict your next period and ovulation",
                  "Track physical and emotional symptoms",
                  "Get personalized health insights",
                  "Set reminders for medications and appointments"
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="flex items-center justify-center h-5 w-5 rounded-full bg-pink-100">
                        <svg className="h-3 w-3 text-pink-600" fill="currentColor" viewBox="0 0 12 12">
                          <path d="M10.28 2.28L4 8.563l-2.28-2.28a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                      </div>
                    </div>
                    <p className="ml-3 text-gray-700">{item}</p>
                  </div>
                ))}
              </div>

              <Link to="/tracker">
                <button className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105">
                  Start Tracking
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Community Says</h2>
            <div className="w-20 h-1 bg-purple-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "This platform has been a game-changer for my health journey. The community support is incredible!",
                author: "Sarah Johnson",
                role: "PCOS Warrior"
              },
              {
                quote: "I've learned more about my body in the past month than in my entire life. The resources are amazing.",
                author: "Priya Patel",
                role: "New Mom"
              },
              {
                quote: "The cycle tracker helped me understand my body better and improved my quality of life significantly.",
                author: "Maria Garcia",
                role: "Health Enthusiast"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="mb-4 text-purple-500">
                  <FaQuoteLeft className="text-2xl opacity-30" />
                </div>
                <p className="text-gray-700 italic mb-6">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <p className="font-semibold text-gray-900">{testimonial.author}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Ready to take control of your health journey?
          </motion.h2>
          <motion.p 
            className="text-xl mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Join thousands of women who have transformed their health with our platform.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="bg-white text-purple-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105">
              Get Started for Free
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:bg-opacity-10 font-semibold py-3 px-8 rounded-full transition duration-300">
              Learn More
            </button>
          </motion.div>
        </div>
      </section>

      {/* Chatbot */}
      <NiraChatbot />
    </div>
  );
};

export default Home;
