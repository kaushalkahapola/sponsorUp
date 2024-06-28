import React, { useState } from 'react';
import { FaEye, FaEyeSlash, FaGoogle, FaFacebook } from 'react-icons/fa';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex h-screen">
      <div className="w-2/3 bg-white p-8">
        <h2 className="text-3xl font-semibold mb-8">Sign In</h2>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded bg-gray-100 text-black"
            type="email"
            id="email"
            name="email"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="password">
            Password
          </label>
          <div className="relative">
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded bg-gray-100 text-black"
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              required
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-600"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between mb-4">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            Remember me
          </label>
          <a href="#" className="text-primary-500 hover:underline">
            Forgot password?
          </a>
        </div>
        <button className="w-full bg-primary-500 text-white py-2 rounded mb-4 hover:bg-primary-700">
          Sign In
        </button>
        <p className="text-center text-gray-600 mb-4">or sign in with</p>
        <div className="flex justify-center space-x-4">
          <button className="flex items-center bg-gray-100 px-4 py-2 rounded hover:bg-gray-200">
            <FaGoogle className="text-red-500 mr-2" />
            Google
          </button>
          <button className="flex items-center bg-gray-100 px-4 py-2 rounded hover:bg-gray-200">
            <FaFacebook className="text-blue-500 mr-2" />
            Facebook
          </button>
        </div>
      </div>
      <div className="w-1/3 bg-primary-500 flex items-center justify-center">
        {/* Right side content (if any) */}
      </div>
    </div>
  );
};

export default Login;
