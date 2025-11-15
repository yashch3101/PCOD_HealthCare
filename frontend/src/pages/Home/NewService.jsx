import React from 'react';
import { motion } from 'framer-motion';
import { FaClinicMedical, FaUserMd, FaMobileAlt } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

const services = [
  {
    icon: <FaClinicMedical className="text-4xl text-purple-600 mb-4" />,
    title: 'Pregnancy Care',
    description: 'Comprehensive care and support throughout your pregnancy journey with expert guidance.',
    link: '/pregnancy'
  },
  {
    icon: <FaUserMd className="text-4xl text-pink-500 mb-4" />,
    title: 'PCOS Management',
    description: 'Personalized plans and expert advice for managing PCOS effectively.',
    link: '/pcod-pcos'
  },
  {
    icon: <FaMobileAlt className="text-4xl text-blue-500 mb-4" />,
    title: 'Menopause Support',
    description: 'Guidance and community support for women going through menopause.',
    link: '/menopause'
  }
];

const ServiceCard = ({ service, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col"
    >
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-50 mb-4">
          {service.icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
        <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
        <a 
          href={service.link}
          className="text-purple-600 hover:text-purple-800 font-medium inline-flex items-center group"
        >
          Learn more
          <svg 
            className="w-4 h-4 ml-2 transition-transform duration-300 transform group-hover:translate-x-1" 
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
        </a>
      </div>
    </motion.div>
  );
};

const NewService = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl font-extrabold text-gray-900 sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Services
          </motion.h2>
          <motion.p 
            className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Comprehensive healthcare services designed specifically for women's unique needs
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <motion.a
            href="/services"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-purple-600 hover:bg-purple-700 transition-colors duration-300 shadow-md hover:shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Services
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default NewService;
