import React, { useState, useEffect } from "react";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";

/**
 * Renders a carousel component for displaying album images.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {Array<string>} props.album - The array of album images.
 * @param {number} [autoChangeInterval=5000] - The interval in milliseconds for automatic image change.
 * @returns {JSX.Element} - The rendered component.
 */
const AlbumCarousel = ({ album, autoChangeInterval = 5000 }) => {
  const [albumIndex, setAlbumIndex] = useState(0);
  const [timer, setTimer] = useState(null);

  useEffect(() => {
    // Clear previous timer
    if (timer) {
      clearTimeout(timer);
    }

    // Set new timer for auto image change
    const newTimer = setTimeout(() => {
      setAlbumIndex((prevIndex) =>
        prevIndex === album.length - 1 ? 0 : prevIndex + 1
      );
    }, autoChangeInterval);

    setTimer(newTimer);

    // Clean up timer on component unmount or album change
    return () => {
      clearTimeout(newTimer);
    };
  }, [albumIndex, album, autoChangeInterval]);

  // Handle previous image click
  const prevImage = () => {
    setAlbumIndex((prevIndex) =>
      prevIndex === 0 ? album.length - 1 : prevIndex - 1
    );
    resetTimer();
  };

  // Handle next image click
  const nextImage = () => {
    setAlbumIndex((prevIndex) =>
      prevIndex === album.length - 1 ? 0 : prevIndex + 1
    );
    resetTimer();
  };

  // Reset timer on manual image change
  const resetTimer = () => {
    if (timer) {
      clearTimeout(timer);
    }
    const newTimer = setTimeout(() => {
      setAlbumIndex((prevIndex) =>
        prevIndex === album.length - 1 ? 0 : prevIndex + 1
      );
    }, autoChangeInterval);
    setTimer(newTimer);
  };

  // Render component
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {/* Album Carousel */}
      <div className="p-4 relative">
        <div className="text-lg font-bold mb-4">Album</div>
        <div className="relative overflow-hidden rounded-lg shadow-sm">
          <img
            className="object-cover w-full h-64 transition-transform duration-500 transform translate-x-[-${albumIndex * 100}%]"
            src={album[albumIndex]}
            alt={`Album ${albumIndex}`}
          />
          <div className="absolute inset-y-0 left-0 flex items-center">
            <button
              className="px-3 py-1 bg-gray-800 text-white rounded-l hover:bg-gray-700 focus:outline-none"
              onClick={prevImage}
            >
              <MdNavigateBefore />
            </button>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center">
            <button
              className="px-3 py-1 bg-gray-800 text-white rounded-r hover:bg-gray-700 focus:outline-none"
              onClick={nextImage}
            >
              <MdNavigateNext />
            </button>
          </div>
        </div>
        {/* Dots */}
        <div className="flex justify-center mt-2">
          {album.map((_, index) => (
            <div
              key={index}
              className={`w-1.5 h-1.5 mx-1 rounded-full ${
                index === albumIndex ? "bg-primary" : "bg-gray-100"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AlbumCarousel;
