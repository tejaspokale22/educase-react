import React from 'react'

function LoginPage() {
  return (
    <div className="flex justify-center min-h-screen bg-white">
      <div className="bg-white p-8 max-w-sm w-full  border border-gray-200 pt-12">
        <h1 className="text-3xl font-semibold text-gray-800 mb-2">Signin to your<br/>PopX account</h1>
        <p className="text-base text-gray-500 mb-8 leading-normal">Lorem ipsum dolor sit amet,<br/>consectetur adipiscing elit,</p>

        <div className="mb-4 relative">
          <label htmlFor="email" className="absolute left-3 -top-2 text-purple-700 text-xs font-medium px-1 bg-white">Email Address</label>
          <input type="email" id="email" placeholder="Enter email address" className="w-full pt-3 pb-2 px-3 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" />
        </div>

        <div className="mb-8 relative">
          <label htmlFor="password" className="absolute left-3 -top-2 text-purple-700 text-xs font-medium px-1 bg-white">Password</label>
          <input type="password" id="password" placeholder="Enter password" className="w-full pt-3 pb-2 px-3 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" />
        </div>

        <button className="w-full p-3 rounded-lg text-lg font-bold cursor-pointer bg-gray-300 text-white">Login</button>
      </div>
    </div>
  )
}

export default LoginPage 