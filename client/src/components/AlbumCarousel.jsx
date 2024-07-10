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
    if (!album || album.length === 0) {
      return;
    }

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

    resetTimer();

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [albumIndex, album, autoChangeInterval]);

  const prevImage = () => {
    setAlbumIndex((prevIndex) =>
      prevIndex === 0 ? album.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setAlbumIndex((prevIndex) =>
      prevIndex === album.length - 1 ? 0 : prevIndex + 1
    );
  };

  if (!album || album.length === 0) {
    return null;
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-4 relative">
        <div className="text-lg text-center font-bold mb-4">Album</div>
        <div className="relative overflow-hidden rounded-lg shadow-sm">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${albumIndex * 100}%)` }}
          >
            {album.map((image, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <img
                  className="object-cover w-full h-64"
                  src={image}
                  alt={`Album ${index}`}
                />
              </div>
            ))}
          </div>
          <div className="absolute inset-y-0 left-0 flex items-center">
            <button
              className="px-3 py-1 bg-transparent text-black text-white rounded hover:bg-primary hover:text-white focus:outline-none"
              onClick={prevImage}
            >
              <MdNavigateBefore />
            </button>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center">
            <button
              className="px-3 py-1 bg-transparent text-black text-white rounded hover:bg-primary hover:text-white focus:outline-none"
              onClick={nextImage}
            >
              <MdNavigateNext />
            </button>
          </div>
        </div>
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
