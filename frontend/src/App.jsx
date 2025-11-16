import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Navbar from "@/components/Navbar";
import Home from "./pages/Home/Home";
import Community from "./pages/Community/Community";
import TrackerDetail from "./pages/TrackerDetail/TrackerDetail";
import PregnancyPage from "./pages/Pregnancy/Pregnancy";
import MenopausePage from "./pages/Menopause/Menopause";
import Dashboard from "./pages/Dashboard/Dashboard";
import Footer from "./components/Footer";
import AboutUs from "./pages/AboutUs/AboutUs";
import Checkup from "./pages/Checkup";
import FaceScan from "./pages/FaceScan";

import HairSkinCarePage from "./pages/HairSkinCarePage/HairSkinCarePage";
import Doctor from "./pages/doctor/Doctor";
import Login from "./pages/doctor/Login";
import CreateProfile from "./pages/doctor/CreateProfile";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="overflow-y-scroll h-screen scroll-snap-type-y-mandatory">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/community" element={<Community />} />
           <Route path="/face-scan" element={<FaceScan />} />
          <Route path="/tracker" element={<TrackerDetail />} />
          <Route path="/pregnancy" element={<PregnancyPage />} />
          <Route path="/menopause" element={<MenopausePage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/hairandskincare" element={<HairSkinCarePage />} />
          <Route path="/doctor" element={<Doctor />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create-profile" element={<CreateProfile />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/pcod-pcos" element={<Checkup />} />



        </Routes>
        <ToastContainer position="top-right" autoClose={3000} />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
