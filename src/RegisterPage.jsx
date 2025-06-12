import React from 'react'
import { useNavigate } from 'react-router-dom';

function RegisterPage() {
  const navigate = useNavigate();

  const handleCreateAccount = () => {
    // In a real application, you would handle user registration here.
    // After successful registration, navigate to the profile page.
    navigate('/profile');
  };

  return (
    <div className="flex justify-center min-h-screen bg-white">
      <div className="bg-white p-5 max-w-sm w-full border border-gray-200 pt-12 flex flex-col min-h-screen">
        <div className="flex-grow">
          <h1 className="text-3xl font-semibold text-gray-800 mb-8">Create your <br/> PopX account</h1>

          <div className="mb-4 relative">
            <label htmlFor="fullName" className="absolute left-3 -top-2 text-purple-700 text-xs font-medium px-1 bg-white">Full Name<span className="text-red-500">*</span></label>
            <input type="text" id="fullName" placeholder="Marry Doe" className="w-full pt-3 pb-2 px-3 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" />
          </div>

          <div className="mb-4 relative">
            <label htmlFor="phoneNumber" className="absolute left-3 -top-2 text-purple-700 text-xs font-medium px-1 bg-white">Phone number<span className="text-red-500">*</span></label>
            <input type="text" id="phoneNumber" placeholder="Marry Doe" className="w-full pt-3 pb-2 px-3 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" />
          </div>

          <div className="mb-4 relative">
            <label htmlFor="emailAddress" className="absolute left-3 -top-2 text-purple-700 text-xs font-medium px-1 bg-white">Email address<span className="text-red-500">*</span></label>
            <input type="email" id="emailAddress" placeholder="Marry Doe" className="w-full pt-3 pb-2 px-3 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" />
          </div>

          <div className="mb-4 relative">
            <label htmlFor="password" className="absolute left-3 -top-2 text-purple-700 text-xs font-medium px-1 bg-white">Password<span className="text-red-500">*</span></label>
            <input type="password" id="password" placeholder="Marry Doe" className="w-full pt-3 pb-2 px-3 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" />
          </div>

          <div className="mb-6 relative">
            <label htmlFor="companyName" className="absolute left-3 -top-2 text-purple-700 text-xs font-medium px-1 bg-white">Company name</label>
            <input type="text" id="companyName" placeholder="Marry Doe" className="w-full pt-3 pb-2 px-3 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" />
          </div>

          <div className="mb-8">
            <label className="block text-gray-800 text-base font-medium mb-2">Are you an Agency?<span className="text-red-500">*</span></label>
            <div className="flex items-center space-x-4">
              <label htmlFor="agencyYes" className="inline-flex items-center">
                <input type="radio" id="agencyYes" name="agency" value="yes" className="h-4 w-4 accent-purple-600" />
                <span className="ml-2 text-gray-700">Yes</span>
              </label>
              <label htmlFor="agencyNo" className="inline-flex items-center">
                <input type="radio" id="agencyNo" name="agency" value="no" className="h-4 w-4 accent-purple-600" />
                <span className="ml-2 text-gray-700">No</span>
              </label>
            </div>
          </div>
        </div>

        <button
          className="w-full px-3 py-2 rounded-lg text-md font-semibold cursor-pointer bg-purple-600 text-white mt-auto"
          onClick={handleCreateAccount}
        >
          Create Account
        </button>
      </div>
    </div>
  )
}

export default RegisterPage 