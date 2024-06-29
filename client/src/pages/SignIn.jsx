import React, { useState } from "react";
import { FaEye, FaEyeSlash, FaGoogle, FaFacebook } from "react-icons/fa";
import { Button } from "../components/Buttons";
import signInFn from "../firebase/SignIn";
import GoogleSignIn from "../firebase/GoogleSignIn";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleClick = (e) => {
    const id = e.target.id;
    if (id === "signin-btn") {
      signInFn(email, password);
    } else if (id === "google-btn") {
      GoogleSignIn();
    } else if (id === "facebook-btn") {
      console.log("Facebook button clicked");
    }
  };

  //add to Input components
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex h-screen">
      <div className="w-full md:w-3/4 lg:w-2/3 bg-white p-8 flex items-center justify-center">
        <div className="w-full max-w-lg">
          <h2 className="text-3xl font-semibold mb-8 text-center">Sign In</h2>
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
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="password">
              Password
            </label>
            <div className="relative">
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded bg-gray-100 text-black"
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                required
                onChange={(e) => setPassword(e.target.value)}
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
              <input
                type="checkbox"
                className="mr-2"
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              Remember me
            </label>
            <a href="#" className="text-primary-500 hover:underline">
              Forgot password?
            </a>
          </div>
          <div className="flex justify-center mb-4">
            <Button
              id="signin-btn"
              text="Sign In"
              minWidth="200px"
              onClick={handleClick}
            />
          </div>
          <p className="text-center text-gray-600 mb-4">or sign in with</p>
          <div className="flex justify-center space-x-4">
            <Button
              variant="secondary"
              id="google-btn"
              text="Google"
              onClick={handleClick}
              icon={<FaGoogle className="text-red-500 mr-2" />}
            />
            <Button
              variant="secondary"
              id="facebook-btn"
              text="Facebook"
              icon={<FaFacebook className="text-blue-500 mr-2" />}
            />
          </div>
        </div>
      </div>
      <div className="hidden md:flex md:w-1/4 lg:w-1/3 bg-primary-500 items-center justify-center">
        {/* Right side content (if any) */}
      </div>
    </div>
  );
};

export default SignIn;
