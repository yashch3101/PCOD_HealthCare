"use client"

import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

function Doctor() {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState("profile")
  const [doctorData, setDoctorData] = useState(null)
  const [availabilityForm, setAvailabilityForm] = useState({
    day: "",
    startTime: "",
    endTime: "",
  })

  useEffect(() => {
    // In a real app, you would fetch this data from your backend
    const storedData = localStorage.getItem("doctorData")
    if (storedData) {
      setDoctorData(JSON.parse(storedData))
    } else {
      // If no data is found, redirect to login
      navigate("/")
    }
  }, [navigate])

  const handleLogout = () => {
    // In a real app, you would clear the session/token
    navigate("/")
  }

  const handleAvailabilityChange = (e) => {
    const { name, value } = e.target
    setAvailabilityForm((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleAvailabilitySubmit = (e) => {
    e.preventDefault()

    if (!availabilityForm.day || !availabilityForm.startTime || !availabilityForm.endTime) {
      alert("Please fill all fields")
      return
    }

    // Add new availability
    const newAvailability = {
      id: Date.now(),
      ...availabilityForm,
    }

    const updatedData = {
      ...doctorData,
      availability: [...(doctorData.availability || []), newAvailability],
    }

    // Update state and localStorage
    setDoctorData(updatedData)
    localStorage.setItem("doctorData", JSON.stringify(updatedData))

    // Reset form
    setAvailabilityForm({
      day: "",
      startTime: "",
      endTime: "",
    })
  }

  if (!doctorData) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">Doctor Portal</h1>
          <button
            onClick={handleLogout}
            className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
          >
            Logout
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex">
              <button
                className={`w-1/3 py-4 px-1 text-center border-b-2 font-medium text-sm ${
                  activeTab === "profile"
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
                onClick={() => setActiveTab("profile")}
              >
                My Profile
              </button>
              <button
                className={`w-1/3 py-4 px-1 text-center border-b-2 font-medium text-sm ${
                  activeTab === "appointments"
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
                onClick={() => setActiveTab("appointments")}
              >
                My Appointments
              </button>
              <button
                className={`w-1/3 py-4 px-1 text-center border-b-2 font-medium text-sm ${
                  activeTab === "availability"
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
                onClick={() => setActiveTab("availability")}
              >
                Create Availability
              </button>
            </nav>
          </div>

          <div className="p-6">
            {activeTab === "profile" && (
              <div className="space-y-6">
                <h3 className="text-lg font-medium text-gray-900">Doctor Information</h3>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Full Name</p>
                    <p className="mt-1 text-sm text-gray-900">{doctorData.name}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Email</p>
                    <p className="mt-1 text-sm text-gray-900">{doctorData.email}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Gender</p>
                    <p className="mt-1 text-sm text-gray-900">{doctorData.gender}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Specialization</p>
                    <p className="mt-1 text-sm text-gray-900">{doctorData.specialization}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Experience</p>
                    <p className="mt-1 text-sm text-gray-900">{doctorData.experience} years</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "appointments" && (
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">My Appointments</h3>
                {doctorData.appointments && doctorData.appointments.length > 0 ? (
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Patient
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Date
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Time
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Status
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {doctorData.appointments.map((appointment) => (
                          <tr key={appointment.id}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              {appointment.patientName}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{appointment.date}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{appointment.time}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{appointment.status}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <p className="text-gray-500">No appointments scheduled yet.</p>
                )}
              </div>
            )}

            {activeTab === "availability" && (
              <div className="space-y-6">
                <h3 className="text-lg font-medium text-gray-900">Create Availability</h3>
                <form onSubmit={handleAvailabilitySubmit} className="space-y-4">
                  <div>
                    <label htmlFor="day" className="block text-sm font-medium text-gray-700">
                      Day
                    </label>
                    <select
                      id="day"
                      name="day"
                      className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                      value={availabilityForm.day}
                      onChange={handleAvailabilityChange}
                      required
                    >
                      <option value="">Select Day</option>
                      <option value="Monday">Monday</option>
                      <option value="Tuesday">Tuesday</option>
                      <option value="Wednesday">Wednesday</option>
                      <option value="Thursday">Thursday</option>
                      <option value="Friday">Friday</option>
                      <option value="Saturday">Saturday</option>
                      <option value="Sunday">Sunday</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="startTime" className="block text-sm font-medium text-gray-700">
                        Start Time
                      </label>
                      <input
                        type="time"
                        name="startTime"
                        id="startTime"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        value={availabilityForm.startTime}
                        onChange={handleAvailabilityChange}
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="endTime" className="block text-sm font-medium text-gray-700">
                        End Time
                      </label>
                      <input
                        type="time"
                        name="endTime"
                        id="endTime"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        value={availabilityForm.endTime}
                        onChange={handleAvailabilityChange}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Add Availability
                    </button>
                  </div>
                </form>

                <div className="mt-6">
                  <h4 className="text-md font-medium text-gray-900 mb-3">Current Availability</h4>
                  {doctorData.availability && doctorData.availability.length > 0 ? (
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Day
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Start Time
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              End Time
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {doctorData.availability.map((slot) => (
                            <tr key={slot.id}>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                {slot.day}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{slot.startTime}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{slot.endTime}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <p className="text-gray-500">No availability set yet.</p>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}

export default Doctor
