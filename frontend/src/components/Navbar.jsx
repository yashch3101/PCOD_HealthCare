"use client";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import WalletConnect from "./WalletConnect";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHealthOpen, setIsHealthOpen] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);
  const navigate = useNavigate();

  const handleMouseEnter = () => {
    clearTimeout(timeoutId);
    setIsHealthOpen(true);
  };

  const handleMouseLeave = () => {
    const id = setTimeout(() => setIsHealthOpen(false), 500);
    setTimeoutId(id);
  };

  const handleClickInside = (e) => {
    e.stopPropagation();
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <>
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 w-full z-50 shadow-md">
        <nav className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-pink-300 via-purple-300 to-pink-300 text-white rounded-b-lg">
          {/* Logo */}
          <div
            className="text-lg font-bold tracking-wide hover:scale-105 transition-transform cursor-pointer"
            onClick={() => handleNavigation("/")}
          >
            SheHelp
          </div>

          {/* Hamburger Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden focus:outline-none"
          >
            <div className="space-y-2">
              <span className="block w-8 h-1 bg-white rounded"></span>
              <span className="block w-8 h-1 bg-white rounded"></span>
              <span className="block w-8 h-1 bg-white rounded"></span>
            </div>
          </button>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-8">
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div
                className="font-bold text-lg cursor-pointer hover:text-pink-400 transition duration-300 transform hover:scale-110"
                onClick={() => handleNavigation("")}
              >
                Health
              </div>
              {isHealthOpen && (
                <div
                  className="absolute top-full left-0 mt-2 bg-white text-purple-800 shadow-md rounded-lg p-4 w-96 grid grid-cols-2 gap-4"
                  onClick={handleClickInside}
                >
                  {[
                    { name: "PCOD/PCOS", path: "/pcod-pcos" },
                    { name: "Pregnancy Care", path: "/pregnancy" },
                    { name: "Menopause", path: "/menopause" },
                    { name: "Mental Well-being", path: "/health/mental" },
                    { name: "Nutrition & Diet", path: "/health/nutrition" },
                    { name: "Fitness & Exercise", path: "/health/fitness" },
                    { name: "Skin & Hair Care", path: "/hairandskincare" },
                    { name: "Women's Hygiene", path: "/health/hygiene" },
                  ].map(({ name, path }) => (
                    <div
                      key={name}
                      className="px-4 py-2 bg-gray-100 hover:bg-purple-200 rounded text-center min-w-[180px] cursor-pointer"
                      onClick={() => handleNavigation(path)}
                    >
                      {name}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {[
              { name: "Community", path: "/community" },
              { name: "Cycle Tracker", path: "/tracker" },
              { name: "Dashboard", path: "/dashboard" },
            ].map(({ name, path }) => (
              <div
                key={name}
                className="font-bold text-lg cursor-pointer hover:text-pink-400 transition duration-300 transform hover:scale-110"
                onClick={() => handleNavigation(path)}
              >
                {name}
              </div>
            ))}
          </div>

          {/* Connect Wallet Button */}
          <div className="hidden lg:flex">
            <WalletConnect />
          </div>
        </nav>
      </div>
      {/* Spacer to offset fixed navbar height */}
      <div className="h-[80px]" />
    </>
  );
}