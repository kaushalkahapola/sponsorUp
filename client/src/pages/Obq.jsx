import React, { useEffect, useState } from "react";
import roleImage from "../assets/OBCYR.png";
import { CheckCircledIcon, RadiobuttonIcon } from "@radix-ui/react-icons";
import { Heading } from "@radix-ui/themes";
import { Button, ButtonsGroup } from "../components/Buttons";
import { auth, db } from "../firebase/firebase";
import { doc, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";

function Obq() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    //if not signed in send to signin
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        window.location.href = "/signin";
      }
      setUser(user);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  const totalQuestions = 2; // Total number of questions
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const roles = ["Event Organizer", "Sponsor"];
  const [roleIndex, setRoleIndex] = useState("");
  const [userType, setUserType] = useState("");

  const handleFinish = async () => {
    try {
      // Check if role and interests are defined
      if (!userType || !Array.isArray(interests) || interests.length === 0) {
        throw new Error("Role and interests must be provided");
      }

      // Reference to the user's document
      const userRef = doc(db, "users", user.uid);

      // Update the user's document with role and interests
      await setDoc(
        userRef,
        {
          userType: userType,
          interests: interests,
        },
        { merge: true }
      );

      // Notify the user of success
      toast.success("Profile updated successfully");
      //await timer to show the toast
      setTimeout(() => {
        window.location.href = "/account/dashboard";
      }, 1000);
    } catch (error) {
      // Handle and log any errors
      console.error("Error updating profile: ", error);

      // Notify the user of the error
      toast.error("Failed to update profile. Please try again.");
    }
  };

  // Data of interests and places
  const interests_list = [
    "Music",
    "Drama",
    "DJ",
    "Movie",
    "Automobile",
    "Electronic",
    "Clean-Up",
  ];
  const [interestsIndexes, setInterestsIndexes] = useState([]);
  const [interests, setInterests] = useState([]);

  const handleBack = () => {
    setCurrentQuestion((prevQuestion) => Math.max(prevQuestion - 1, 0));
  };

  const handleNext = () => {
    setCurrentQuestion((prevQuestion) =>
      Math.min(prevQuestion + 1, totalQuestions - 1)
    );
    console.log(user);
  };

  const handleSkip = () => {
    setCurrentQuestion(totalQuestions - 1);
  };

  useEffect(() => {
    if (roleIndex) {
      setUserType(roles[roleIndex]);
    }
  }, [roleIndex]);

  useEffect(() => {
    if (interestsIndexes) {
      setInterests(
        interests_list.filter((_, index) => interestsIndexes.includes(index))
      );
    }
  }, [interestsIndexes]);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <div className="flex-grow flex items-center justify-center">
        <div className="container mx-auto bg-white overflow-hidden">
          <div
            className={`flex ${
              currentQuestion === 1
                ? "-translate-x-full"
                : currentQuestion === 2
                ? "-translate-x-[200%]"
                : currentQuestion === 3
                ? "-translate-x-[300%]"
                : "translate-x-0"
            } transition-transform duration-500 ease-in-out`}
          >
            {/* Choose Your Role */}
            <div className="w-full flex-shrink-0 flex items-center">
              <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-6">
                <Heading className="text-2xl mb-6 text-center">
                  Choose Your Role to Get Started
                </Heading>
                <div className="flex space-x-4">
                  <ButtonsGroup
                    texts={roles}
                    selectable_number={1}
                    setSelected={setRoleIndex}
                    selected={roleIndex}
                    swap={true}
                  />
                </div>
              </div>
              <div className="w-1/2 hidden md:block">
                <img
                  src={roleImage}
                  alt="Role"
                  className="w-full h-screen object-cover object-center"
                />
              </div>
            </div>
            {/* What You Are Interested In */}
            <div className="w-full flex-shrink-0 flex items-center">
              <div className="w-1/2 flex flex-col justify-center items-start p-6 lg:mx-20">
                <h1 className="text-2xl font-bold mb-4">Tell us</h1>
                <div className="flex flex-col items-start mb-4 space-y-2">
                  <div className="flex items-center">
                    <CheckCircledIcon className="w-6 h-6 text-gray-400" />
                    <span className="ml-2 text-gray-400">Choose Your Role</span>
                  </div>
                  <div className="flex flex-col items-center">
                    {Array(8)
                      .fill()
                      .map((_, idx) => (
                        <div
                          key={idx}
                          className="w-1 h-1 bg-gray-300 rounded-full my-1"
                        ></div>
                      ))}
                  </div>
                  <div className="flex items-center">
                    <RadiobuttonIcon className="w-6 h-6 text-[#6D31ED]" />
                    <span className="ml-2 text-4xl font-bold">
                      What You Are
                      <br />
                      Interested In
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-3/4 flex flex-col justify-center items-center p-6">
                <h1 className="text-xl font-bold mb-4">Select Up to 3</h1>
                <div className="text-lg">
                  <ButtonsGroup
                    texts={interests_list}
                    selectable_number={3}
                    selected={interestsIndexes}
                    setSelected={setInterestsIndexes}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom navigation */}
      <div className="bg-white w-full py-4 fixed bottom-0 flex justify-between items-center px-4">
        {/* Skip button on second and third pages */}
        {(currentQuestion === 1 || currentQuestion === 2) && (
          <button onClick={handleSkip} className="text-gray-500 cursor-pointer">
            Skip
          </button>
        )}

        <div className="flex space-x-4 ml-auto">
          {/* Next button for pages other than the last */}
          {currentQuestion < totalQuestions - 1 && (
            <Button
              text="Next"
              onClick={handleNext}
              disabled={roles[roleIndex] === undefined ? true : false}
            />
          )}

          {/* Back and Finish buttons on the last page */}
          {currentQuestion === totalQuestions - 1 && (
            <>
              <Button variant="secondary" text="Back" onClick={handleBack} />
              <Button text="Finish" onClick={handleFinish} />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Obq;
