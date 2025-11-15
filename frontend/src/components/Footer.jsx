import React from "react";
import { TiSocialLinkedin, TiSocialFacebookCircular } from "react-icons/ti";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-100 py-10 px-4 sm:px-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          {/* Logo from public folder */}
          <img src="/assets/image.png" alt="Women's Health Logo" className="h-14 mb-4" />
          <h2 className="text-xl font-bold">Women's Health Initiative</h2>
          <p className="text-gray-700">Empowering Women, Supporting Wellness</p>
        </div>

        <div className="flex flex-col items-center">
          <h3 className="text-xl font-bold mb-4">Useful Resources</h3>
          <ul className="space-y-2 text-center">
            <li className="text-gray-700 hover:text-black cursor-pointer">
              Menstrual Health Education
            </li>
            <li className="text-gray-700 hover:text-black cursor-pointer">
              Mental Wellness Programs
            </li>
            <li className="text-gray-700 hover:text-black cursor-pointer">
              Access to Gynecologists
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center md:items-end">
          <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
          <ul className="space-y-3 text-center md:text-right">
            <li className="flex items-center text-gray-700 hover:text-black cursor-pointer text-base">
              <span className="mr-2"><TiSocialFacebookCircular /></span> Facebook
            </li>
            <li className="flex items-center text-gray-700 hover:text-black cursor-pointer text-base">
              <span className="mr-2"><FaInstagram /></span> Instagram
            </li>
            <li className="flex items-center text-gray-700 hover:text-black cursor-pointer text-base">
              <span className="mr-2"><CiTwitter /></span> Twitter
            </li>
            <li className="flex items-center text-gray-700 hover:text-black cursor-pointer text-base">
              <span className="mr-2"><TiSocialLinkedin /></span> LinkedIn
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Women's Health Initiative. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;