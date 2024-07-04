import React, { useState } from "react";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";

/**
 * Renders a carousel component for displaying album images.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {Array<string>} props.album - The array of album images.
 * @returns {JSX.Element} - The rendered component.
 */
const AlbumCarousel = ({ album }) => {
  const [albumIndex, setAlbumIndex] = useState(0);

  //handle empty
  if (!album || album.length === 0) {
    return null;
  }

  const nextImage = () => {
    setAlbumIndex((prevIndex) =>
      prevIndex === album.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setAlbumIndex((prevIndex) =>
      prevIndex === 0 ? album.length - 1 : prevIndex - 1
    );
  };

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
