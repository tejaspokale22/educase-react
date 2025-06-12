import React from "react";

const ProfilePage = () => {
  return (
    <div className="min-h-screen bg-white flex justify-center items-start">
      <div className="bg-gray-50 max-w-sm mx-auto min-h-screen border border-gray-200">
        {/* Account Settings Header */}
        <h1 className="text-xl font-normal mb-4 text-gray-800 bg-white p-5">
          Account Settings
        </h1>

        {/* Profile Info Section */}
        <div className="flex px-4">
          <div className="relative mr-4">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Profile"
              className="w-16 h-16 rounded-full object-cover"
            />
            <div className="absolute bottom-0 right-0 bg-purple-600 rounded-full p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
          </div>
          <div>
            <p className="font-bold text-lg text-gray-900">Marry Doe</p>
            <p className="text-sm text-gray-600">Marry@Gmail.Com</p>
          </div>
        </div>

        {/* Description Section */}
        <p className="text-gray-700 text-sm leading-relaxed p-4">
          Lorem Ipsum Dolor Sit Amet, Consectetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat.
          Sed Diam
        </p>

        {/* Dotted line separator */}
        <div className="border-b border-dashed border-gray-400 pb-4 mb-4"></div>
      </div>
    </div>
  );
};

export default ProfilePage;
