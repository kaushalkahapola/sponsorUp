import React, { useState } from 'react';
import roleImage from '../assets/OBCYR.png'; 
import { CheckCircledIcon, RadiobuttonIcon } from '@radix-ui/react-icons'; 

function Obq() {
  const totalQuestions = 4; // Total number of questions
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedRole, setSelectedRole] = useState('');
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [selectedPlaces, setSelectedPlaces] = useState({});
  const [specificCategories, setSpecificCategories] = useState([]);

  // Data of interests and places
  const interests = ['Music', 'Drama', 'DJ', 'Movie', 'Automobile', 'Electronic', 'Clean Up'];
  const placesByInterest = {
    Music: ['Venue A', 'Venue B', 'Venue C', 'Venue D', 'Venue E'],
    Drama: ['Venue F', 'Venue G', 'Venue H', 'Venue I', 'Venue J'],
    DJ: ['Venue K', 'Venue L', 'Venue M', 'Venue N', 'Venue O'],
    Movie: ['Venue P', 'Venue Q', 'Venue R', 'Venue S', 'Venue T'],
    Automobile: ['Venue U', 'Venue V', 'Venue W', 'Venue X', 'Venue Y'],
    Electronic: ['Venue Z', 'Venue AA', 'Venue BB', 'Venue CC', 'Venue DD'],
    'Clean Up': ['Venue EE', 'Venue FF', 'Venue GG', 'Venue HH', 'Venue II'],
  };

  const handleRoleSelection = (role) => {
    setSelectedRole(role);
  };

  const handleInterestSelection = (interest) => {
    setSelectedInterests((prevInterests) => {
      if (prevInterests.includes(interest)) {
        return prevInterests.filter((item) => item !== interest);
      } else if (prevInterests.length < 3) {
        return [...prevInterests, interest];
      } else {
        return prevInterests;
      }
    });
  };

  const handlePlaceSelection = (interest, place) => {
    setSelectedPlaces((prevPlaces) => ({
      ...prevPlaces,
      [interest]: place,
    }));
  };

  const handleSpecificCategorySelection = (category) => {
    setSpecificCategories((prevCategories) => {
      if (prevCategories.includes(category)) {
        return prevCategories.filter((item) => item !== category);
      } else {
        return [...prevCategories, category];
      }
    });
  };

  const handleBack = () => {
    setCurrentQuestion((prevQuestion) => Math.max(prevQuestion - 1, 0));
  };

  const handleNext = () => {
    setCurrentQuestion((prevQuestion) => Math.min(prevQuestion + 1, totalQuestions - 1));
  };

  const handleSkip = () => {
    setCurrentQuestion(totalQuestions - 1);
  };

  const handleFinish = () => {
    // Logic to handle finishing the questionnaire
    console.log('Finished');
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <div className="flex-grow flex items-center justify-center">
        <div className="container mx-auto bg-white overflow-hidden">
          <div className={`flex ${currentQuestion === 1 ? '-translate-x-full' : currentQuestion === 2 ? '-translate-x-[200%]' : currentQuestion === 3 ? '-translate-x-[300%]' : 'translate-x-0'} transition-transform duration-500 ease-in-out`}>
            {/* Choose Your Role */}
            <div className="w-full flex-shrink-0 flex items-center">
              <div className="w-1/2 flex flex-col justify-center items-center p-6">
                <h1 className="text-2xl font-bold mb-6 text-center">Choose Your Role to Get Started</h1>
                <div className="flex space-x-4">
                  <button
                    onClick={() => handleRoleSelection('Event Organizer')}
                    className={`py-2 px-4 rounded-lg ${selectedRole === 'Event Organizer' ? 'bg-[#6D31ED] text-white' : 'bg-gray-200 hover:bg-[#6D31ED] text-black'}`}
                  >
                    Event Organizer
                  </button>
                  <button
                    onClick={() => handleRoleSelection('Sponsor')}
                    className={`py-2 px-4 rounded-lg ${selectedRole === 'Sponsor' ? 'bg-[#6D31ED] text-white' : 'bg-gray-200 hover:bg-[#6D31ED] text-black'}`}
                  >
                    Sponsor
                  </button>
                </div>
              </div>
              <div className="w-1/2">
                <img src={roleImage} alt="Role" className="w-full h-screen object-cover object-center" />
              </div>
            </div>
            {/* What You Are Interested In */}
            <div className="w-full flex-shrink-0 flex items-center">
              <div className="w-1/2 flex flex-col justify-center items-start p-6">
                <h1 className="text-2xl font-bold mb-4">Tell us</h1>
                <div className="flex flex-col items-start mb-4 space-y-2">
                  <div className="flex items-center">
                    <CheckCircledIcon className="w-6 h-6 text-gray-400" />
                    <span className="ml-2 text-gray-400">Choose Your Role</span>
                  </div>
                  <div className="flex flex-col items-center">
                    {Array(8).fill().map((_, idx) => (
                      <div key={idx} className="w-1 h-1 bg-gray-300 rounded-full my-1"></div>
                    ))}
                  </div>
                  <div className="flex items-center">
                    <RadiobuttonIcon className="w-6 h-6 text-[#6D31ED]" />
                    <span className="ml-2 text-4xl font-bold">What You Are<br />Interested In</span>
                  </div>
                </div>
              </div>
              <div className="w-1/2 flex flex-col justify-center items-center p-6">
                <h1 className="text-xl font-bold mb-4">Select Up to 3</h1>
                <div className="flex flex-wrap justify-left space-x-4 space-y-2">
                  {interests.map((interest) => (
                    <button
                      key={interest}
                      onClick={() => handleInterestSelection(interest)}
                      className={`py-2 px-4 rounded-3xl ${selectedInterests.includes(interest) ? 'bg-[#6D31ED] text-white' : 'bg-gray-200 hover:bg-[#6D31ED] text-black'}`}
                    >
                      {interest}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            {/* Preferred Location */}
            <div className="w-full flex-shrink-0 flex items-center">
              <div className="w-1/2 flex flex-col justify-center items-start p-6">
                <h1 className="text-2xl font-bold mb-4">Tell us</h1>
                <div className="flex flex-col items-start mb-4 space-y-2">
                  <div className="flex items-center">
                    <CheckCircledIcon className="w-6 h-6 text-gray-400" />
                    <span className="ml-2 text-gray-400">Choose Your Role</span>
                  </div>
                  <div className="flex flex-col items-center">
                    {Array(4).fill().map((_, idx) => (
                      <div key={idx} className="w-1 h-1 bg-gray-300 rounded-full my-1"></div>
                    ))}
                  </div>
                  <div className="flex items-center">
                    <CheckCircledIcon className="w-6 h-6 text-gray-400" />
                    <span className="ml-2 text-gray-400">What You Are Interested In</span>
                  </div>
                  <div className="flex flex-col items-center">
                    {Array(4).fill().map((_, idx) => (
                      <div key={idx} className="w-1 h-1 bg-gray-300 rounded-full my-1"></div>
                    ))}
                  </div>
                  <div className="flex items-center">
                    <RadiobuttonIcon className="w-6 h-6 text-[#6D31ED]" />
                    <span className="ml-2 text-4xl font-bold">What Is Your Preferred<br />Location?</span>
                  </div>
                </div>
              </div>
              <div className="w-1/2 flex flex-col justify-center items-center p-6">
                {selectedInterests.map((interest) => (
                  <div key={interest} className="mt-4">
                    <h2 className="text-xl font-bold">{interest}</h2>
                    <div className="flex flex-wrap justify-center space-x-4 space-y-2">
                      {placesByInterest[interest].map((place) => (
                        <button
                          key={place}
                          onClick={() => handlePlaceSelection(interest, place)}
                          className={`py-2 px-4 rounded-3xl ${selectedPlaces[interest] === place ? 'bg-[#6D31ED] text-white' : 'bg-gray-200 hover:bg-[#6D31ED] text-black'}`}
                        >
                          {place}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Specific Categories */}
            <div className="w-full flex-shrink-0 flex items-center">
              <div className="w-1/2 flex flex-col justify-center items-start p-6">
                <h1 className="text-2xl font-bold mb-4">Tell us</h1>
                <div className="flex flex-col items-start mb-4 space-y-2">
                  <div className="flex items-center">
                    <CheckCircledIcon className="w-6 h-6 text-gray-400" />
                    <span className="ml-2 text-gray-400">Choose Your Role</span>
                  </div>
                  <div className="flex flex-col items-center">
                    {Array(3).fill().map((_, idx) => (
                      <div key={idx} className="w-1 h-1 bg-gray-300 rounded-full my-1"></div>
                    ))}
                  </div>
                  <div className="flex items-center">
                    <CheckCircledIcon className="w-6 h-6 text-gray-400" />
                    <span className="ml-2 text-gray-400">What You Are Interested In</span>
                  </div>
                  <div className="flex flex-col items-center">
                    {Array(3).fill().map((_, idx) => (
                      <div key={idx} className="w-1 h-1 bg-gray-300 rounded-full my-1"></div>
                    ))}
                  </div>
                  <div className="flex items-center">
                    <CheckCircledIcon className="w-6 h-6 text-gray-400" />
                    <span className="ml-2 text-gray-400">What Is Your Preferred Location?</span>
                  </div>
                  <div className="flex flex-col items-center">
                    {Array(3).fill().map((_, idx) => (
                      <div key={idx} className="w-1 h-1 bg-gray-300 rounded-full my-1"></div>
                    ))}
                  </div>
                  <div className="flex items-center">
                    <RadiobuttonIcon className="w-6 h-6 text-[#6D31ED]" />
                    <span className="ml-2 text-4xl font-bold">Do You Have Any <br />Specific Categories In <br />Your Mind?</span>
                  </div>
                </div>
              </div>
              <div className="w-1/2 flex flex-col justify-center items-center p-6">
                <h1 className="text-xl font-bold mb-4">Select Categories</h1>
                <div className="flex flex-wrap justify-left space-x-4 space-y-2">
                  {interests.map((category) => (
                    <button
                      key={category}
                      onClick={() => handleSpecificCategorySelection(category)}
                      className={`py-2 px-4 rounded-3xl ${specificCategories.includes(category) ? 'bg-[#6D31ED] text-white' : 'bg-gray-200 hover:bg-[#6D31ED] text-black'}`}
                    >
                      {category}
                    </button>
                  ))}
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
          {/* Back button for pages other than the first */}
          {currentQuestion > 0 && currentQuestion < totalQuestions - 1 && (
            <button onClick={handleBack} className="py-2 px-4 rounded-lg bg-gray-200 hover:bg-gray-300 text-black">
              Back
            </button>
          )}

          {/* Next button for pages other than the last */}
          {currentQuestion < totalQuestions - 1 && (
            <button onClick={handleNext} className="py-2 px-4 rounded-lg bg-[#6D31ED] text-white hover:bg-[#6D31ED]">
              Next
            </button>
          )}

          {/* Back and Finish buttons on the last page */}
          {currentQuestion === totalQuestions - 1 && (
            <>
              <button onClick={handleBack} className="py-2 px-4 rounded-lg bg-gray-200 hover:bg-gray-300 text-black">
                Back
              </button>
              <button onClick={handleFinish} className="py-2 px-4 rounded-lg bg-[#6D31ED] text-white hover:bg-[#6D31ED]">
                Finish
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Obq;
