"use client"

import { Home, User, Calendar, MessageSquare, Settings } from "lucide-react"

function Sidebar({ userData, activeTab, setActiveTab }) {
  const menuItems = [

    { id: "profile", label: "Profile", icon: User },
    { id: "appointments", label: "Appointments", icon: Calendar },
    { id: "yourstory", label: "Your Story", icon: MessageSquare },

  ]

  return (
    <aside className="w-full md:w-64 bg-white border-r border-gray-200 md:min-h-0">
      <div className="flex flex-col items-center py-6 px-4 border-b border-gray-200">
        <img
          src={userData.profileImage || "/placeholder.svg"}
          alt={userData.fullName}
          className="w-20 h-20 rounded-full object-cover mb-4"
        />
        <h2 className="text-xl font-semibold text-gray-800">{userData.fullName}</h2>
        <p className="text-sm text-gray-500">{userData.username}</p>
      </div>

      <nav className="p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                className={`flex items-center w-full px-4 py-2.5 text-left rounded-lg transition-colors ${
                  activeTab === item.id ? "bg-blue-50 text-blue-600 font-medium" : "text-gray-600 hover:bg-gray-100"
                }`}
                onClick={() => setActiveTab(item.id)}
              >
                <item.icon className="w-5 h-5 mr-3" />
                <span>{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar
