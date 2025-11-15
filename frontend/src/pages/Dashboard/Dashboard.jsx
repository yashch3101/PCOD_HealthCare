"use client"

import { useState, useEffect } from "react"
import Sidebar from "../../components/Sidebar"
import ProfileOverview from "../../components/ProfileOverview"
import AppointmentsView from "../../components/AppointmentsView"
import MessageForm from "../../components/MessageForm"
import YourStory from "../YourStory"

function Dashboard() {
  const [activeTab, setActiveTab] = useState("appointments")
  const [appointments, setAppointments] = useState([])

  const userData = {
    fullName: "Anshi Srivastava",
    email: "anshisrivastava.284@gmail.com",
    username: "@anshi31",
    phone: "9888678422",
    location: "Varanasi, Uttar Pradesh",
    memberSince: "January 2025",
    status: "Active",
    profileImage: "https://img.freepik.com/premium-photo/beautiful-woman-profile-picture_1013690-85.jpg",
  }

  useEffect(() => {
    const storedAppointments = localStorage.getItem("appointments")
    if (storedAppointments) {
      setAppointments(JSON.parse(storedAppointments))
    } else {
      const mockData = [
        { id: 1, title: "Medical Checkup", date: "15 May 2025", time: "10:00 AM", doctor: "Dr. Smith" },
        { id: 2, title: "Dental Appointment", date: "22 May 2025", time: "2:30 PM", doctor: "Dr. Johnson" },
        { id: 3, title: "Eye Examination", date: "5 June 2025", time: "11:15 AM", doctor: "Dr. Williams" },
      ]
      setAppointments(mockData)
      localStorage.setItem("appointments", JSON.stringify(mockData))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("appointments", JSON.stringify(appointments))
  }, [appointments])

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <div className="flex flex-1 flex-col md:flex-row">
        <Sidebar userData={userData} activeTab={activeTab} setActiveTab={setActiveTab} />
        <main className="flex-1 p-6 md:p-8 bg-gradient-to-br from-gray-50 to-blue-50">
          {activeTab === "profile" && <ProfileOverview userData={userData} />}
          {activeTab === "appointments" && (
            <AppointmentsView appointments={appointments} setAppointments={setAppointments} />
          )}
          {activeTab === "messages" && <MessageForm />}
          {activeTab === "yourstory" && <YourStory />}
        </main>
      </div>
    </div>
  )
}

export default Dashboard