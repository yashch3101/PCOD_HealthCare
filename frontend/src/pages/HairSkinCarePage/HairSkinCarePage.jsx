import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Droplet, Sun, Heart, Leaf } from "lucide-react";
// import hairSkinImage from "@/assets/hairskin.jpg"; // Replace with your image path

const HairSkinCarePage = () => {
  const [showFAQ, setShowFAQ] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-b from-pink-100 to-purple-100"
    >
      {/* Hero Section */}
      <div className="relative h-[60vh] md:h-96">
        {/* <img
          src={hairSkinImage}
          alt="Hair and Skincare"
          className="absolute inset-0 w-full h-full object-cover rounded-b-lg"
        /> */}
        <div className="absolute inset-0 bg-blue-300 bg-opacity-40 flex items-center justify-center">
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="text-white text-4xl md:text-6xl font-bold text-center px-4"
          >
            Hair & Skincare Guide
          </motion.h1>
        </div>
      </div>

      {/* Quick Links */}
      <div className="max-w-5xl mx-auto p-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-6"
        >
          {[
            { name: "Hair Care", icon: <Sparkles className="text-pink-600" />, id: "#haircare" },
            { name: "Skin Care", icon: <Droplet className="text-blue-500" />, id: "#skincare" },
            { name: "Natural Remedies", icon: <Leaf className="text-green-500" />, id: "#remedies" },
            { name: "FAQs", icon: <Heart className="text-red-500" />, id: "#faq" },
          ].map(({ name, icon, id }) => (
            <a
              href={id}
              className="bg-white shadow-lg hover:bg-purple-100 transition p-4 rounded-xl flex items-center space-x-2"
              key={name}
            >
              {icon}
              <span className="font-semibold">{name}</span>
            </a>
          ))}
        </motion.div>
      </div>

      {/* Hair Care Section */}
      <motion.section id="haircare" className="max-w-4xl mx-auto p-6">
        <h2 className="text-3xl font-semibold mb-4 text-pink-700">Hair Care</h2>
        <p className="text-gray-700">
          Use gentle shampoos, oil massages, and avoid heat styling. Try aloe vera and coconut oil for natural strength.
        </p>
      </motion.section>

      {/* Skin Care Section */}
      <motion.section id="skincare" className="max-w-4xl mx-auto p-6">
        <h2 className="text-3xl font-semibold mb-4 text-blue-600">Skin Care</h2>
        <p className="text-gray-700">
          Stick to a cleansing-moisturizing routine. Avoid chemicals, use sunscreen, and keep skin hydrated.
        </p>
      </motion.section>

      {/* Natural Remedies Section */}
      <motion.section id="remedies" className="max-w-4xl mx-auto p-6">
        <h2 className="text-3xl font-semibold mb-4 text-pink-700">Natural Remedies</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Apply honey and turmeric for glowing skin.</li>
          <li>Use aloe vera for hydration and healing.</li>
          <li>Coconut oil strengthens hair naturally.</li>
        </ul>
      </motion.section>

      {/* FAQ Section */}
      <motion.section id="faq" className="max-w-4xl mx-auto p-6">
        <h2 className="text-3xl font-semibold mb-4 text-red-600">FAQs</h2>
        <button
          className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
          onClick={() => setShowFAQ(!showFAQ)}
        >
          {showFAQ ? "Hide FAQs" : "Show FAQs"}
        </button>
        {showFAQ && (
          <div className="mt-4 text-gray-700">
            <p><strong>Q: How often should I moisturize?</strong> A: Twice daily for best results.</p>
            <p><strong>Q: Can coconut oil damage hair?</strong> A: No, but use in moderation to avoid buildup.</p>
          </div>
        )}
      </motion.section>
    </motion.div>
  );
};

export default HairSkinCarePage;
