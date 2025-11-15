"use client"

import { useState } from "react"

function MessageForm() {
  const [formData, setFormData] = useState({
    recipient: "",
    subject: "",
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Message submitted:", formData)
    alert("Message sent successfully!")
    setFormData({
      recipient: "",
      subject: "",
      message: "",
    })
  }

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Send Message</h1>

      <form className="space-y-5" onSubmit={handleSubmit}>
        <div className="space-y-2">
          <label htmlFor="recipient" className="block text-sm font-medium text-gray-600">
            Recipient
          </label>
          <input
            type="email"
            id="recipient"
            name="recipient"
            value={formData.recipient}
            onChange={handleChange}
            placeholder="Enter email address"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="subject" className="block text-sm font-medium text-gray-600">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Enter message subject"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="block text-sm font-medium text-gray-600">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Type your message here..."
            rows="6"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          ></textarea>
        </div>

        <div className="flex justify-end space-x-4 pt-2">
          <button
            type="button"
            className="px-5 py-2.5 border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-5 py-2.5 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  )
}

export default MessageForm
