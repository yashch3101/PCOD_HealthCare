"use client"

import { Link } from "react-router-dom"
import { ArrowLeft, ThermometerSun, Heart, Brain, Moon, Calendar } from 'lucide-react'
import { motion } from "framer-motion"
import NiraChatbot from "./NiraChatbot"


export default function MenopausePage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100">
      <div className="max-w-5xl mx-auto p-6">
        <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
          <Link to="/" className="inline-flex items-center text-purple-500 hover:text-purple-600 mb-6 group">
            <ArrowLeft className="mr-2 h-5 w-5 group-hover:translate-x-[-4px] transition-transform" />
            <span className="font-medium">Back to Home</span>
          </Link>
        </motion.div>

        <motion.div
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Hero Section */}
          <div className="relative h-72 md:h-96 bg-gradient-to-r from-purple-300 to-indigo-300">
            <div className="absolute inset-0 flex items-center justify-center">
              {/* <img
                src={menopauseImage || "/placeholder.svg"}
                alt="Menopause"
                className="h-64 md:h-80 object-contain p-4"
              /> */}
            </div>
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-purple-500/80 to-transparent">
              <div className="p-8 text-white">
                <motion.h1
                  className="text-3xl md:text-5xl font-bold"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.7 }}
                >
                  Menopause Guide
                </motion.h1>
                <motion.p
                  className="mt-2 text-lg md:text-xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.7 }}
                >
                  Understanding and navigating this important life transition
                </motion.p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 md:p-8">
            <div className="prose max-w-none">
              <motion.p
                className="text-lg text-gray-700 mb-8"
                variants={fadeIn}
                initial="initial"
                animate="animate"
                transition={{ delay: 0.2 }}
              >
                Menopause is a natural biological process that marks the end of menstrual cycles. It's diagnosed after
                you've gone 12 months without a menstrual period. This guide provides essential information to help you
                navigate this transition with confidence and care.
              </motion.p>

              {/* Navigation Tabs */}
              <motion.div
                className="flex flex-wrap gap-4 mb-8"
                variants={fadeIn}
                initial="initial"
                animate="animate"
                transition={{ delay: 0.3, staggerChildren: 0.1 }}
              >
                <motion.a
                  href="#symptoms"
                  className="flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-600 rounded-full hover:bg-purple-200 transition-colors shadow-sm hover:shadow"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ThermometerSun className="h-5 w-5" />
                  <span>Symptoms</span>
                </motion.a>
                <motion.a
                  href="#management"
                  className="flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-600 rounded-full hover:bg-purple-200 transition-colors shadow-sm hover:shadow"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Heart className="h-5 w-5" />
                  <span>Management</span>
                </motion.a>
                <motion.a
                  href="#mental-health"
                  className="flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-600 rounded-full hover:bg-purple-200 transition-colors shadow-sm hover:shadow"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Brain className="h-5 w-5" />
                  <span>Mental Health</span>
                </motion.a>
                <motion.a
                  href="#lifestyle"
                  className="flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-600 rounded-full hover:bg-purple-200 transition-colors shadow-sm hover:shadow"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Calendar className="h-5 w-5" />
                  <span>Lifestyle</span>
                </motion.a>
              </motion.div>

              {/* Symptoms Section */}
              <motion.section
                id="symptoms"
                className="mb-12"
                variants={fadeIn}
                initial="initial"
                animate="animate"
                transition={{ delay: 0.4 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-purple-100 rounded-full">
                    <ThermometerSun className="h-8 w-8 text-purple-500" />
                  </div>
                  <h2 className="text-2xl font-bold text-purple-500">Common Symptoms</h2>
                </div>

                <p className="mb-4">
                  Menopause symptoms can vary widely among women. Some women experience few or mild symptoms, while
                  others experience more severe symptoms that significantly impact their quality of life.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <motion.div
                    className="bg-gradient-to-br from-purple-50 to-purple-100 p-5 rounded-xl shadow-sm"
                    whileHover={{
                      y: -5,
                      boxShadow:
                        "0 10px 25px -5px rgba(168, 85, 247, 0.1), 0 8px 10px -6px rgba(168, 85, 247, 0.1)",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="font-semibold text-lg mb-3 text-purple-600">Physical Symptoms</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-2">•</span>
                        <span>
                          <strong>Hot flashes:</strong> Sudden feelings of warmth that spread over the body
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-2">•</span>
                        <span>
                          <strong>Night sweats:</strong> Hot flashes that occur during sleep
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-2">•</span>
                        <span>
                          <strong>Sleep disturbances:</strong> Difficulty falling asleep or staying asleep
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-2">•</span>
                        <span>
                          <strong>Vaginal dryness:</strong> Discomfort during intercourse due to decreased moisture
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-2">•</span>
                        <span>
                          <strong>Weight gain:</strong> Particularly around the abdomen
                        </span>
                      </li>
                    </ul>
                  </motion.div>

                  <motion.div
                    className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-5 rounded-xl shadow-sm"
                    whileHover={{
                      y: -5,
                      boxShadow:
                        "0 10px 25px -5px rgba(99, 102, 241, 0.1), 0 8px 10px -6px rgba(99, 102, 241, 0.1)",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="font-semibold text-lg mb-3 text-indigo-600">Emotional Symptoms</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-indigo-500 mr-2">•</span>
                        <span>
                          <strong>Mood changes:</strong> Irritability, anxiety, or sadness
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-indigo-500 mr-2">•</span>
                        <span>
                          <strong>Fatigue:</strong> Feeling tired or lacking energy
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-indigo-500 mr-2">•</span>
                        <span>
                          <strong>Memory problems:</strong> Difficulty with concentration or memory
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-indigo-500 mr-2">•</span>
                        <span>
                          <strong>Reduced libido:</strong> Decreased interest in sex
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-indigo-500 mr-2">•</span>
                        <span>
                          <strong>Mood swings:</strong> Rapid changes in emotional state
                        </span>
                      </li>
                    </ul>
                  </motion.div>
                </div>
              </motion.section>

              {/* Management Section */}
              <motion.section
                id="management"
                className="mb-12"
                variants={fadeIn}
                initial="initial"
                animate="animate"
                transition={{ delay: 0.5 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-purple-100 rounded-full">
                    <Heart className="h-8 w-8 text-purple-500" />
                  </div>
                  <h2 className="text-2xl font-bold text-purple-500">Management Strategies</h2>
                </div>

                <p className="mb-4">
                  There are various approaches to managing menopause symptoms, from lifestyle changes to medical
                  treatments. It's important to discuss options with your healthcare provider to find what works best for
                  you.
                </p>

                <motion.div
                  className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl mt-6 shadow-sm"
                  whileHover={{
                    boxShadow:
                      "0 10px 25px -5px rgba(168, 85, 247, 0.1), 0 8px 10px -6px rgba(168, 85, 247, 0.1)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="font-semibold text-lg mb-4 text-purple-600">Treatment Options</h3>

                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.div
                      className="bg-white p-4 rounded-lg shadow-sm"
                      whileHover={{
                        y: -5,
                        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                      }}
                    >
                      <h4 className="font-medium text-purple-500 mb-2">Hormone Therapy</h4>
                      <p className="text-gray-700">
                        Estrogen therapy is the most effective treatment for menopausal hot flashes. Your doctor can
                        help determine if this is right for you based on your medical history.
                      </p>
                    </motion.div>

                    <motion.div
                      className="bg-white p-4 rounded-lg shadow-sm"
                      whileHover={{
                        y: -5,
                        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                      }}
                    >
                      <h4 className="font-medium text-purple-500 mb-2">Non-Hormonal Medications</h4>
                      <p className="text-gray-700">
                        Certain antidepressants, anti-seizure drugs, and blood pressure medications may help manage hot
                        flashes when hormone therapy isn't suitable.
                      </p>
                    </motion.div>

                    <motion.div
                      className="bg-white p-4 rounded-lg shadow-sm"
                      whileHover={{
                        y: -5,
                        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                      }}
                    >
                      <h4 className="font-medium text-purple-500 mb-2">Vaginal Treatments</h4>
                      <p className="text-gray-700">
                        Low-dose vaginal estrogen products can help with vaginal dryness, discomfort during intercourse,
                        and some urinary symptoms.
                      </p>
                    </motion.div>

                    <motion.div
                      className="bg-white p-4 rounded-lg shadow-sm"
                      whileHover={{
                        y: -5,
                        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                      }}
                    >
                      <h4 className="font-medium text-purple-500 mb-2">Alternative Therapies</h4>
                      <p className="text-gray-700">
                        Some women find relief through acupuncture, mindfulness meditation, or certain herbal
                        supplements. Discuss these options with your healthcare provider.
                      </p>
                    </motion.div>
                  </div>

                  <motion.div
                    className="mt-6 bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h4 className="font-medium text-yellow-700 mb-1">Important Note</h4>
                    <p className="text-gray-700">
                      Always consult with your healthcare provider before starting any treatment for menopause symptoms,
                      especially hormone therapy, which may not be suitable for everyone.
                    </p>
                  </motion.div>
                </motion.div>
              </motion.section>

              {/* Mental Health Section */}
              <motion.section
                id="mental-health"
                className="mb-12"
                variants={fadeIn}
                initial="initial"
                animate="animate"
                transition={{ delay: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-purple-100 rounded-full">
                    <Brain className="h-8 w-8 text-purple-500" />
                  </div>
                  <h2 className="text-2xl font-bold text-purple-500">Mental Health During Menopause</h2>
                </div>

                <p className="mb-6">
                  The hormonal changes during menopause can affect your mental health. It's important to recognize these
                  changes and seek support when needed.
                </p>

                <div className="space-y-6">
                  <motion.div
                    className="bg-gradient-to-br from-purple-50 to-purple-100 p-5 rounded-xl shadow-sm"
                    whileHover={{
                      boxShadow:
                        "0 10px 25px -5px rgba(168, 85, 247, 0.1), 0 8px 10px -6px rgba(168, 85, 247, 0.1)",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="font-semibold text-lg mb-3 text-purple-600">Common Mental Health Concerns</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-2">•</span>
                        <span>
                          <strong>Anxiety:</strong> Increased feelings of worry or tension
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-2">•</span>
                        <span>
                          <strong>Depression:</strong> Persistent feelings of sadness or loss of interest
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-2">•</span>
                        <span>
                          <strong>Mood swings:</strong> Rapid changes in emotional state
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-2">•</span>
                        <span>
                          <strong>Irritability:</strong> Being easily annoyed or agitated
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-2">•</span>
                        <span>
                          <strong>Cognitive changes:</strong> Problems with memory and concentration
                        </span>
                      </li>
                    </ul>
                  </motion.div>

                  <motion.div
                    className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-5 rounded-xl shadow-sm"
                    whileHover={{
                      boxShadow:
                        "0 10px 25px -5px rgba(99, 102, 241, 0.1), 0 8px 10px -6px rgba(99, 102, 241, 0.1)",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="font-semibold text-lg mb-3 text-indigo-600">Coping Strategies</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-indigo-500 mr-2">•</span>
                        <span>
                          <strong>Seek professional help:</strong> Talk to a therapist or counselor who specializes in
                          women's health
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-indigo-500 mr-2">•</span>
                        <span>
                          <strong>Practice mindfulness:</strong> Meditation and deep breathing can help manage stress and
                          anxiety
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-indigo-500 mr-2">•</span>
                        <span>
                          <strong>Stay connected:</strong> Maintain social connections and consider joining a support
                          group
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-indigo-500 mr-2">•</span>
                        <span>
                          <strong>Prioritize sleep:</strong> Establish good sleep habits to improve mood and cognitive
                          function
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-indigo-500 mr-2">•</span>
                        <span>
                          <strong>Consider medication:</strong> Antidepressants may help with mood symptoms and can also
                          reduce hot flashes
                        </span>
                      </li>
                    </ul>
                  </motion.div>
                </div>
              </motion.section>

              {/* Lifestyle Section */}
              <motion.section
                id="lifestyle"
                variants={fadeIn}
                initial="initial"
                animate="animate"
                transition={{ delay: 0.7 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-purple-100 rounded-full">
                    <Calendar className="h-8 w-8 text-purple-500" />
                  </div>
                  <h2 className="text-2xl font-bold text-purple-500">Lifestyle Adjustments</h2>
                </div>

                <p className="mb-6">
                  Making certain lifestyle changes can help manage menopause symptoms and improve your overall health
                  during this transition.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    className="bg-gradient-to-br from-purple-50 to-purple-100 p-5 rounded-xl shadow-sm"
                    whileHover={{
                      y: -5,
                      boxShadow:
                        "0 10px 25px -5px rgba(168, 85, 247, 0.1), 0 8px 10px -6px rgba(168, 85, 247, 0.1)",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <Moon className="h-5 w-5 text-purple-500" />
                      <h3 className="font-semibold text-lg text-purple-600">Diet and Nutrition</h3>
                    </div>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-2">•</span>
                        <span>
                          <strong>Eat a balanced diet:</strong> Focus on fruits, vegetables, whole grains, and lean
                          proteins
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-2">•</span>
                        <span>
                          <strong>Limit trigger foods:</strong> Reduce consumption of spicy foods, caffeine, and alcohol
                          that can trigger hot flashes
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-2">•</span>
                        <span>
                          <strong>Calcium and vitamin D:</strong> Important for bone health, especially after menopause
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-2">•</span>
                        <span>
                          <strong>Stay hydrated:</strong> Drink plenty of water throughout the day
                        </span>
                      </li>
                    </ul>
                  </motion.div>

                  <motion.div
                    className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-5 rounded-xl shadow-sm"
                    whileHover={{
                      y: -5,
                      boxShadow:
                        "0 10px 25px -5px rgba(99, 102, 241, 0.1), 0 8px 10px -6px rgba(99, 102, 241, 0.1)",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <Heart className="h-5 w-5 text-indigo-500" />
                      <h3 className="font-semibold text-lg text-indigo-600">Physical Activity</h3>
                    </div>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-indigo-500 mr-2">•</span>
                        <span>
                          <strong>Regular exercise:</strong> Aim for at least 150 minutes of moderate activity per week
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-indigo-500 mr-2">•</span>
                        <span>
                          <strong>Strength training:</strong> Helps maintain bone density and muscle mass
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-indigo-500 mr-2">•</span>
                        <span>
                          <strong>Yoga and tai chi:</strong> Can help with balance, flexibility, and stress reduction
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-indigo-500 mr-2">•</span>
                        <span>
                          <strong>Pelvic floor exercises:</strong> Can help with urinary incontinence
                        </span>
                      </li>
                    </ul>
                  </motion.div>
                </div>
              </motion.section>

              {/* Call to Action */}
              <motion.div
                className="mt-12 bg-gradient-to-r from-purple-200 to-indigo-200 p-6 rounded-xl text-center shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                whileHover={{
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
              >
                <h3 className="text-xl font-bold text-purple-600 mb-3">Need Personalized Advice?</h3>
                <p className="mb-4 text-gray-700">
                  Every woman's menopause experience is unique. Consult with healthcare professionals for personalized
                  guidance.
                </p>
                <motion.button
                  className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-medium py-2 px-6 rounded-full transition-colors shadow-md"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Find a Specialist
                </motion.button>
              </motion.div>
            </div>
          </div>
        </motion.div>
        <NiraChatbot />
      </div>
    </div>
  )
}