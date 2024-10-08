import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { FaEye, FaEyeSlash, FaFacebook, FaGoogle } from "react-icons/fa";
import { Button } from "../components/Buttons";
import GoogleSignIn from "../firebase/GoogleSignIn";
import signUpFn from "../firebase/SignUp";
import { signUpSchema } from "../schemas/validationSchema";
import signup from "../assets/signup.svg";
import { Text } from "@radix-ui/themes";

const SignUp = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const emailFromQuery = query.get("email") || "";
  const navigate = useNavigate();

  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: zodResolver(signUpSchema),
  });

  useEffect(() => {
    if (emailFromQuery) {
      setValue("email", emailFromQuery);
    }
  }, [emailFromQuery, setValue]);

  const onSubmit = async (formData) => {
    try {
      await signUpFn(
        formData.email,
        formData.password,
        formData.confirmPassword,
        navigate
      );
    } catch (error) {
      console.error("Error signing Up:", error);
    }
  };

  // Password visibility toggle
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex h-screen">
      {/* { display the logo top left corener of the screen} */}
      <header>
        <div className="container mx-auto p-4 absolute top-0 left-0">
          <div className="font-bold text-2xl cursor-default flex items-center gap-1">
            <Link to="/">
              <Text>
                Sponsor<span className="text-primary-500">Up</span>
              </Text>
            </Link>
          </div>
        </div>
      </header>
      <div className="w-full lg:w-2/3 bg-white p-8 flex items-center justify-center">
        <div className="w-full max-w-lg">
          <h2 className="text-3xl font-semibold mb-8 text-center">Sign Up</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="email">
                Email
              </label>
              <Controller
                name="email"
                control={control}
                rules={{ required: "Email is required" }}
                render={({ field }) => (
                  <input
                    {...field}
                    className={`w-full px-3 py-2 border ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    } rounded bg-gray-50 text-black`}
                    type="email"
                    id="email"
                    value={field.value || ""}
                    onChange={field.onChange}
                    required
                  />
                )}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="password">
                Password
              </label>
              <div className="relative">
                <Controller
                  name="password"
                  control={control}
                  rules={{ required: "Password is required" }}
                  render={({ field }) => (
                    <input
                      {...field}
                      className={`w-full px-3 py-2 border ${
                        errors.password ? "border-red-500" : "border-gray-300"
                      } rounded bg-gray-50 text-black`}
                      type={showPassword ? "text" : "password"}
                      id="password"
                      value={field.value || ""}
                      onChange={field.onChange}
                      required
                    />
                  )}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-600"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 mb-2"
                htmlFor="confirmPassword"
              >
                Confirm Password
              </label>
              <div className="relative">
                <Controller
                  name="confirmPassword"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      className={`w-full px-3 py-2 border ${
                        errors.confirmPassword
                          ? "border-red-500"
                          : "border-gray-300"
                      } rounded bg-gray-50 text-black`}
                      type={showPassword ? "text" : "password"}
                      id="confirmPassword"
                      value={field.value || ""}
                      onChange={field.onChange}
                      required
                    />
                  )}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-600"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>
            <div className="flex justify-center mt-8 mb-4">
              <Button
                id="signup-btn"
                text="Sign Up"
                minWidth="200px"
                type="submit"
                onClick={handleSubmit}
              />
            </div>
          </form>
          <p className="text-center text-gray-600 mb-4">or sign up with</p>
          <div className="flex justify-center space-x-4">
            <Button
              variant="secondary"
              id="google-btn"
              text="Google"
              icon={<FaGoogle className="text-red-500 mr-2" />}
              onClick={GoogleSignIn}
            />
            <Button
              variant="secondary"
              id="facebook-btn"
              text="Facebook"
              icon={<FaFacebook className="text-blue-500 mr-2" />}
            />
          </div>
          {/* redirect the user to sign in page if already have a account */}
          <p className="text-center mt-8">
            Already have an account?{" "}
            <Link to="/signin" className="text-primary-500 hover:underline">
              Sign In
            </Link>
          </p>
        </div>
      </div>
      <div className="hidden lg:flex lg:w-1/3 bg-primary-500 items-center justify-center p-10">
        <img src={signup} alt="signup" />
      </div>
    </div>
  );
};

export default SignUp;
