import React, { useState } from "react";
import OrganizerSideBar from "../components/OrganizerSideBar";
import OrganizersNavbar from "../components/OrganizersNavbar";
import { PencilIcon } from "@heroicons/react/solid";

const defaultProfilePicture =
  "https://pixabay.com/vectors/blank-profile-picture-mystery-man-973460/";

const ProfileSettingsPage = () => {
  const [profile, setProfile] = useState({
    name: "John Doe",
    about: "This is a brief description about John.",
    email: "devtitans@gmail.com",
    phoneNumber: "123-456-7890",
    profilePhoto: defaultProfilePicture,
    password: "",
    confirmPassword: "",
  });

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfile({ ...profile, profilePhoto: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const calculatePasswordStrength = (password) => {
    let strength = 0;

    strength += Math.min(password.length * 5, 40);

    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) {
      strength += password.length * 10;
    }

    if (/\d/.test(password)) {
      strength += 10;
    }

    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      strength += 10;
    }

    return Math.min(strength, 100);
  };

  const handleConfirmPasswordChange = (e) => {
    const confirmPassword = e.target.value;
    setProfile({ ...profile, confirmPassword });
  };

  const passwordsMatch = profile.password === profile.confirmPassword;

  return (
    <div className="font-poppins">
      <OrganizersNavbar />
      <div className="flex">
        <OrganizerSideBar />
        <div className="flex-grow p-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center space-x-4 mb-8">
              <div className="relative">
                <img
                  src={profile.profilePhoto}
                  alt="Profile"
                  className="w-24 h-24 rounded-full object-cover"
                />
                <label
                  htmlFor="upload-photo"
                  className="absolute bottom-0 right-0 bg-white p-1 rounded-full cursor-pointer shadow-md"
                >
                  <PencilIcon className="h-6 w-6 text-gray-700" />
                  <input
                    type="file"
                    id="upload-photo"
                    className="hidden"
                    onChange={handlePhotoUpload}
                  />
                </label>
              </div>
              <h2 className="text-2xl font-bold">{profile.name}</h2>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <input
                  type="text"
                  value={profile.name}
                  onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                  className="flex-grow p-2 border rounded"
                  placeholder="Name"
                />
                <PencilIcon className="h-6 w-6 text-gray-700 cursor-pointer" />
              </div>
              <div className="flex items-center space-x-4">
                <input
                  type="text"
                  value={profile.about}
                  onChange={(e) => setProfile({ ...profile, about: e.target.value })}
                  className="flex-grow p-2 border rounded"
                  placeholder="About"
                />
                <PencilIcon className="h-6 w-6 text-gray-700 cursor-pointer" />
              </div>
              <div className="flex items-center space-x-4">
                <input
                  type="email"
                  value={profile.email}
                  className="flex-grow p-2 border rounded bg-gray-100"
                  placeholder="Email"
                  readOnly
                />
              </div>
              <div className="flex items-center space-x-4">
                <input
                  type="text"
                  value={profile.phoneNumber}
                  onChange={(e) => setProfile({ ...profile, phoneNumber: e.target.value })}
                  className="flex-grow p-2 border rounded"
                  placeholder="Phone Number"
                />
                <PencilIcon className="h-6 w-6 text-gray-700 cursor-pointer" />
              </div>
            </div>

            <div className="mt-8 p-4 border rounded">
              <h3 className="text-xl font-bold mb-4">Change Password</h3>
              <div className="space-y-4">
                <input
                  type="password"
                  className="w-full p-2 border rounded"
                  placeholder="Old Password"
                />
                <input
                  type="password"
                  value={profile.password}
                  onChange={(e) => setProfile({ ...profile, password: e.target.value })}
                  className="w-full p-2 border rounded"
                  placeholder="New Password"
                />
                <div className="text-sm text-gray-600 flex items-center">
                  <strong className="mr-2">Password Strength:</strong>
                  <div className="h-2 w-full bg-gray-200 rounded">
                    <div
                      className="h-full rounded"
                      style={{
                        width: `${calculatePasswordStrength(profile.password)}%`,
                        background:
                          calculatePasswordStrength(profile.password) < 30
                            ? "#FF0000"
                            : calculatePasswordStrength(profile.password) < 60
                            ? "#FFD700"
                            : "#00FF00",
                      }}
                    ></div>
                  </div>
                </div>
                <input
                  type="password"
                  value={profile.confirmPassword}
                  onChange={handleConfirmPasswordChange}
                  className={`w-full p-2 border rounded ${
                    passwordsMatch ? "border-green-500" : "border-red-500"
                  }`}
                  placeholder="Re-enter New Password"
                />
                {!passwordsMatch && (
                  <p className="text-red-500 text-sm">Passwords do not match.</p>
                )}
                {passwordsMatch && (
                  <p className="text-green-500 text-sm">Passwords match.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSettingsPage;








