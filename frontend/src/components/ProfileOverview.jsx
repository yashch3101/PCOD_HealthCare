function ProfileOverview({ userData }) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Profile Overview</h1>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-medium text-gray-500 mb-2">Full Name</h3>
            <p className="text-base font-medium text-gray-800">{userData.fullName}</p>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-500 mb-2">Email</h3>
            <p className="text-base font-medium text-gray-800">{userData.email}</p>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-500 mb-2">Phone</h3>
            <p className="text-base font-medium text-gray-800">{userData.phone}</p>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-medium text-gray-500 mb-2">Location</h3>
            <p className="text-base font-medium text-gray-800">{userData.location}</p>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-500 mb-2">Member Since</h3>
            <p className="text-base font-medium text-gray-800">{userData.memberSince}</p>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-500 mb-2">Status</h3>
            <span className="inline-block bg-green-100 text-green-600 text-sm font-medium px-3 py-1 rounded-full">
              {userData.status}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileOverview
