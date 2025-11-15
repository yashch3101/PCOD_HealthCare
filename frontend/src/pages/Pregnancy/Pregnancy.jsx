"use client"

import { Link } from "react-router-dom"
import { ArrowLeft, Salad, Activity, ShieldAlert, Heart, Calendar, MessageCircle } from "lucide-react"
import { motion } from "framer-motion"
import pregnancyImage from "../../assets/preg.jpg"
import NiraChatbot from "./NiraChatbot"

export default function PregnancyPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-100">
      <div className="max-w-5xl mx-auto p-6">
        <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
          <Link to="/" className="inline-flex items-center text-pink-500 hover:text-pink-600 mb-6 group">
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
          <div className="relative h-72 md:h-96 bg-gradient-to-r from-pink-300 to-purple-300">
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src={pregnancyImage || "/placeholder.svg"}
                alt="Pregnancy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-pink-500/80 to-transparent">
              <div className="p-8 text-white">
                <motion.h1
                  className="text-3xl md:text-5xl font-bold"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.7 }}
                >
                  Pregnancy Guide
                </motion.h1>
                <motion.p
                  className="mt-2 text-lg md:text-xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.7 }}
                >
                  Essential information for a healthy pregnancy journey
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
                Pregnancy is a beautiful journey that comes with its own set of challenges and considerations. This
                guide provides essential information to help you navigate through this special time with confidence and
                care for both you and your baby.
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
                  href="#diet"
                  className="flex items-center gap-2 px-4 py-2 bg-pink-100 text-pink-600 rounded-full hover:bg-pink-200 transition-colors shadow-sm hover:shadow"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Salad className="h-5 w-5" />
                  <span>Diet</span>
                </motion.a>
                <motion.a
                  href="#exercise"
                  className="flex items-center gap-2 px-4 py-2 bg-pink-100 text-pink-600 rounded-full hover:bg-pink-200 transition-colors shadow-sm hover:shadow"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Activity className="h-5 w-5" />
                  <span>Exercise</span>
                </motion.a>
                <motion.a
                  href="#precautions"
                  className="flex items-center gap-2 px-4 py-2 bg-pink-100 text-pink-600 rounded-full hover:bg-pink-200 transition-colors shadow-sm hover:shadow"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ShieldAlert className="h-5 w-5" />
                  <span>Precautions</span>
                </motion.a>
                <motion.a
                  href="#wellness"
                  className="flex items-center gap-2 px-4 py-2 bg-pink-100 text-pink-600 rounded-full hover:bg-pink-200 transition-colors shadow-sm hover:shadow"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Heart className="h-5 w-5" />
                  <span>Wellness</span>
                </motion.a>
              </motion.div>

              {/* Diet Section */}
              <motion.section
                id="diet"
                className="mb-12"
                variants={fadeIn}
                initial="initial"
                animate="animate"
                transition={{ delay: 0.4 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-pink-100 rounded-full">
                    <Salad className="h-8 w-8 text-pink-500" />
                  </div>
                  <h2 className="text-2xl font-bold text-pink-500">Nutrition During Pregnancy</h2>
                </div>

                <p className="mb-4">
                  Proper nutrition is crucial during pregnancy. Your baby depends on you for all their nutritional
                  needs. Here are some dietary recommendations:
                </p>

                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <motion.div
                    className="bg-gradient-to-br from-pink-50 to-pink-100 p-5 rounded-xl shadow-sm"
                    whileHover={{
                      y: -5,
                      boxShadow: "0 10px 25px -5px rgba(236, 72, 153, 0.1), 0 8px 10px -6px rgba(236, 72, 153, 0.1)",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="font-semibold text-lg mb-3 text-pink-600">Foods to Include</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-pink-500 mr-2">•</span>
                        <span>
                          <strong>Folate-rich foods:</strong> Leafy greens, citrus fruits, beans, and fortified cereals
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-pink-500 mr-2">•</span>
                        <span>
                          <strong>Calcium sources:</strong> Dairy products, fortified plant milks, tofu, and leafy
                          greens
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-pink-500 mr-2">•</span>
                        <span>
                          <strong>Iron-rich foods:</strong> Lean red meat, poultry, fish, beans, and iron-fortified
                          cereals
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-pink-500 mr-2">•</span>
                        <span>
                          <strong>Omega-3 fatty acids:</strong> Fatty fish (salmon, sardines), walnuts, and flaxseeds
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-pink-500 mr-2">•</span>
                        <span>
                          <strong>Protein:</strong> Lean meats, poultry, fish, eggs, beans, peas, and nuts
                        </span>
                      </li>
                    </ul>
                  </motion.div>

                  <motion.div
                    className="bg-gradient-to-br from-red-50 to-red-100 p-5 rounded-xl shadow-sm"
                    whileHover={{
                      y: -5,
                      boxShadow: "0 10px 25px -5px rgba(239, 68, 68, 0.1), 0 8px 10px -6px rgba(239, 68, 68, 0.1)",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="font-semibold text-lg mb-3 text-red-600">Foods to Avoid</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        <span>
                          <strong>High-mercury fish:</strong> Shark, swordfish, king mackerel, and tilefish
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        <span>
                          <strong>Unpasteurized foods:</strong> Certain soft cheeses, unpasteurized milk, and juices
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        <span>
                          <strong>Raw or undercooked foods:</strong> Raw meat, poultry, eggs, and seafood
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        <span>
                          <strong>Excessive caffeine:</strong> Limit to 200mg per day (about one 12oz cup of coffee)
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        <span>
                          <strong>Alcohol:</strong> No amount of alcohol is considered safe during pregnancy
                        </span>
                      </li>
                    </ul>
                  </motion.div>
                </div>
              </motion.section>

              {/* Exercise Section */}
              <motion.section
                id="exercise"
                className="mb-12"
                variants={fadeIn}
                initial="initial"
                animate="animate"
                transition={{ delay: 0.5 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-pink-100 rounded-full">
                    <Activity className="h-8 w-8 text-pink-500" />
                  </div>
                  <h2 className="text-2xl font-bold text-pink-500">Exercise During Pregnancy</h2>
                </div>

                <p className="mb-4">
                  Regular physical activity during pregnancy can reduce back pain, help prevent gestational diabetes,
                  strengthen your heart and blood vessels, and help you lose the baby weight after your baby is born.
                </p>

                <motion.div
                  className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-xl mt-6 shadow-sm"
                  whileHover={{
                    boxShadow: "0 10px 25px -5px rgba(236, 72, 153, 0.1), 0 8px 10px -6px rgba(236, 72, 153, 0.1)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="font-semibold text-lg mb-4 text-pink-600">Recommended Exercises</h3>

                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.div
                      className="bg-white p-4 rounded-lg shadow-sm"
                      whileHover={{
                        y: -5,
                        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                      }}
                    >
                      <h4 className="font-medium text-pink-500 mb-2">Walking</h4>
                      <p className="text-gray-700">
                        A great, low-impact exercise that can be done throughout pregnancy. Aim for 20-30 minutes most
                        days.
                      </p>
                    </motion.div>

                    <motion.div
                      className="bg-white p-4 rounded-lg shadow-sm"
                      whileHover={{
                        y: -5,
                        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                      }}
                    >
                      <h4 className="font-medium text-pink-500 mb-2">Swimming</h4>
                      <p className="text-gray-700">
                        Excellent for supporting your weight while working your muscles and cardiovascular system.
                      </p>
                    </motion.div>

                    <motion.div
                      className="bg-white p-4 rounded-lg shadow-sm"
                      whileHover={{
                        y: -5,
                        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                      }}
                    >
                      <h4 className="font-medium text-pink-500 mb-2">Prenatal Yoga</h4>
                      <p className="text-gray-700">
                        Helps maintain flexibility and strength while focusing on breathing techniques useful for labor.
                      </p>
                    </motion.div>

                    <motion.div
                      className="bg-white p-4 rounded-lg shadow-sm"
                      whileHover={{
                        y: -5,
                        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                      }}
                    >
                      <h4 className="font-medium text-pink-500 mb-2">Stationary Cycling</h4>
                      <p className="text-gray-700">
                        Low-impact cardio that doesn't put pressure on your joints and reduces the risk of falls.
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
                      Always consult with your healthcare provider before starting or continuing any exercise program
                      during pregnancy.
                    </p>
                  </motion.div>
                </motion.div>
              </motion.section>

              {/* Precautions Section */}
              <motion.section
                id="precautions"
                className="mb-12"
                variants={fadeIn}
                initial="initial"
                animate="animate"
                transition={{ delay: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-pink-100 rounded-full">
                    <ShieldAlert className="h-8 w-8 text-pink-500" />
                  </div>
                  <h2 className="text-2xl font-bold text-pink-500">Precautions During Pregnancy</h2>
                </div>

                <p className="mb-6">
                  Taking certain precautions during pregnancy can help ensure the health and safety of both you and your
                  baby.
                </p>

                <div className="space-y-6">
                  <motion.div
                    className="bg-gradient-to-br from-pink-50 to-pink-100 p-5 rounded-xl shadow-sm"
                    whileHover={{
                      boxShadow: "0 10px 25px -5px rgba(236, 72, 153, 0.1), 0 8px 10px -6px rgba(236, 72, 153, 0.1)",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="font-semibold text-lg mb-3 text-pink-600">General Precautions</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-pink-500 mr-2">•</span>
                        <span>
                          <strong>Regular prenatal check-ups:</strong> Follow your doctor's recommended schedule for
                          prenatal visits
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-pink-500 mr-2">•</span>
                        <span>
                          <strong>Take prenatal vitamins:</strong> Especially those containing folic acid, iron, and
                          calcium
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-pink-500 mr-2">•</span>
                        <span>
                          <strong>Stay hydrated:</strong> Drink plenty of water throughout the day
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-pink-500 mr-2">•</span>
                        <span>
                          <strong>Proper hygiene:</strong> Wash hands frequently and practice food safety
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-pink-500 mr-2">•</span>
                        <span>
                          <strong>Avoid harmful substances:</strong> No smoking, alcohol, or recreational drugs
                        </span>
                      </li>
                    </ul>
                  </motion.div>

                  <motion.div
                    className="bg-gradient-to-br from-red-50 to-red-100 p-5 rounded-xl shadow-sm"
                    whileHover={{
                      boxShadow: "0 10px 25px -5px rgba(239, 68, 68, 0.1), 0 8px 10px -6px rgba(239, 68, 68, 0.1)",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="font-semibold text-lg mb-3 text-red-600">Warning Signs to Watch For</h3>
                    <p className="mb-3 text-gray-700">
                      Contact your healthcare provider immediately if you experience any of these symptoms:
                    </p>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        <span>Vaginal bleeding or fluid leakage</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        <span>Severe abdominal pain or cramping</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        <span>Severe headaches or changes in vision</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        <span>Rapid swelling of face, hands, or feet</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        <span>Decreased fetal movement</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        <span>Fever over 100.4°F (38°C)</span>
                      </li>
                    </ul>
                  </motion.div>
                </div>
              </motion.section>

              {/* Wellness Section (New) */}
              <motion.section
                id="wellness"
                variants={fadeIn}
                initial="initial"
                animate="animate"
                transition={{ delay: 0.7 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-pink-100 rounded-full">
                    <Heart className="h-8 w-8 text-pink-500" />
                  </div>
                  <h2 className="text-2xl font-bold text-pink-500">Emotional Wellness</h2>
                </div>

                <p className="mb-6">
                  Pregnancy affects not only your body but also your emotional well-being. Taking care of your mental
                  health is just as important as your physical health.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    className="bg-gradient-to-br from-purple-50 to-purple-100 p-5 rounded-xl shadow-sm"
                    whileHover={{
                      y: -5,
                      boxShadow: "0 10px 25px -5px rgba(168, 85, 247, 0.1), 0 8px 10px -6px rgba(168, 85, 247, 0.1)",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <Calendar className="h-5 w-5 text-purple-500" />
                      <h3 className="font-semibold text-lg text-purple-600">Self-Care Practices</h3>
                    </div>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-2">•</span>
                        <span>
                          <strong>Rest and relaxation:</strong> Prioritize sleep and take short naps when needed
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-2">•</span>
                        <span>
                          <strong>Mindfulness:</strong> Practice meditation or deep breathing exercises
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-2">•</span>
                        <span>
                          <strong>Journaling:</strong> Document your pregnancy journey and feelings
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-2">•</span>
                        <span>
                          <strong>Prenatal massage:</strong> Helps reduce stress and relieve muscle tension
                        </span>
                      </li>
                    </ul>
                  </motion.div>

                  <motion.div
                    className="bg-gradient-to-br from-blue-50 to-blue-100 p-5 rounded-xl shadow-sm"
                    whileHover={{
                      y: -5,
                      boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.1), 0 8px 10px -6px rgba(59, 130, 246, 0.1)",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <MessageCircle className="h-5 w-5 text-blue-500" />
                      <h3 className="font-semibold text-lg text-blue-600">Support Systems</h3>
                    </div>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>
                          <strong>Partner involvement:</strong> Include your partner in appointments and preparations
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>
                          <strong>Prenatal classes:</strong> Join classes to learn about childbirth and meet other
                          expecting parents
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>
                          <strong>Support groups:</strong> Connect with other pregnant women online or in person
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>
                          <strong>Professional help:</strong> Don't hesitate to speak with a therapist if you're feeling
                          overwhelmed
                        </span>
                      </li>
                    </ul>
                  </motion.div>
                </div>
              </motion.section>

              {/* Call to Action */}
              <motion.div
                className="mt-12 bg-gradient-to-r from-pink-200 to-purple-200 p-6 rounded-xl text-center shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                whileHover={{ boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              >
                <h3 className="text-xl font-bold text-pink-600 mb-3">Need Personalized Advice?</h3>
                <p className="mb-4 text-gray-700">
                  Every pregnancy is unique. Consult with healthcare professionals for personalized guidance.
                </p>
                <motion.button
                  className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-medium py-2 px-6 rounded-full transition-colors shadow-md"
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