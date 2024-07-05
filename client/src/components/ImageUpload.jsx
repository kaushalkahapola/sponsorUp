import React, { useState } from 'react';

const ImageUpload = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleImageUpload = async (event) => {
    if (images.length >= 10) {
      alert('You can only upload a maximum of 10 images.');
      return;
    }

    const file = event.target.files[0];
    if (!file) return;

    setIsLoading(true);

    // Simulate image upload process (replace with your actual upload logic)
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setImages((prevImages) => [...prevImages, { file, url: URL.createObjectURL(file) }]);
    setIsLoading(false);
  };

  const handleRemoveImage = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md text-center max-w-full">
      <h2 className="text-2xl font-semibold mb-4">Upload Images for Your Event ({images.length}/10)</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {images.map((image, index) => (
          <div key={index} className="relative w-24 h-24 border-2 border-gray-200 rounded-lg overflow-hidden">
            <img src={image.url} alt={`Upload ${index + 1}`} className="w-full h-full object-cover" />
            <p className="text-xs mt-2 text-black">{`${index + 1}.${image.file.name.split('.')[0]}`}</p>
            <button
              onClick={() => handleRemoveImage(index)}
              className="absolute top-0 right-0 bg-red-500 text-white rounded-sm p-1 hover:bg-red-600"
            >
              &times;
            </button>
          </div>
        ))}
        {images.length < 10 && (
          <label className="flex justify-center items-center w-24 h-24 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer">
            <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
            {isLoading ? (
              <div className="text-4xl text-gray-400">
                <span className="animate-spin">&#8987;</span>
              </div>
            ) : (
              <div className="text-4xl text-gray-400">+</div>
            )}
          </label>
        )}
      </div>
    </div>
  );
};

export default ImageUpload;
