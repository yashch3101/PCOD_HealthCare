import React from 'react';
import { useNavigate } from 'react-router-dom';

const AboutUs = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#f9c5d1] to-[#a6c1ee] flex flex-col items-center px-6 py-12">
        <div className="max-w-5xl text-center">
            <h1 className="text-5xl font-bold text-white drop-shadow mb-6">About Us</h1>
            <p className="text-lg text-white/90 mb-6">
            We are dedicated to empowering women through personalized healthcare. Our platform blends advanced AI,
            compassionate design, and community support to help women take charge of their well-being — every cycle,
            every milestone.
            </p>

            <button
            onClick={() => navigate('/vote')}
            className="mt-4 bg-white text-pink-600 hover:bg-pink-100 px-6 py-3 rounded-xl font-semibold shadow-lg transition"
            >
            {/* ✨ Suggest or Vote Feature */}
            </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mt-12">
            {/* Mission Card */}
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:scale-105 transition duration-300">
            <h2 className="text-2xl font-semibold text-pink-600 mb-4">Our Mission</h2>
            <p className="text-gray-700">
                To provide accurate, empathetic, and accessible healthcare guidance for every woman, regardless of age or
                background. We're breaking the stigma around women’s health with tech and empathy.
            </p>
            </div>

            {/* Vision Card */}
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:scale-105 transition duration-300">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Our Vision</h2>
            <p className="text-gray-700">
                To become the most trusted digital health companion for women globally — integrating AI, medical science,
                and community to support physical, mental, and reproductive health.
            </p>
            </div>

            {/* Offerings */}
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:scale-105 transition duration-300">
            <h2 className="text-2xl font-semibold text-pink-600 mb-4">What We Offer</h2>
            <ul className="list-disc pl-5 text-gray-700">
                <li>Cycle & Fertility Tracking</li>
                <li>AI-Powered Wellness Insights</li>
                <li>PCOS/PCOD Management Tools</li>
                <li>Anonymous Community & Expert Support</li>
            </ul>
            </div>

            {/* Why Choose Us */}
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:scale-105 transition duration-300">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Why Choose Us</h2>
            <p className="text-gray-700">
                Because your health deserves care that understands you. Our app is built by women, for women — backed by
                data, designed with heart.
            </p>
            </div>
        </div>
        </div>
    );
};

export default AboutUs;
