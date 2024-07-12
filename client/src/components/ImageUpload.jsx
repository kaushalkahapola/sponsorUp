import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ImageUpload = ({ multiple, onUpload }) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleImageUpload = async (event) => {
    const files = Array.from(event.target.files); // Convert FileList to Array
    if (images.length + files.length > 10) {
      alert('You can only upload a maximum of 10 images.');
      return;
    }

    setIsLoading(true);

    const uploadedImages = files.map((file) => ({
      file,
      url: URL.createObjectURL(file),
    }));

    const newImages = [...images, ...uploadedImages];
    setImages(newImages);
    setIsLoading(false);

    // Invoke the onUpload callback with the new images
    if (onUpload) {
      onUpload(newImages.map((image) => image.file));
    }
  };

  const handleRemoveImage = (index) => {
    const newImages = images.filter((_, i) => i !== index);
    setImages(newImages);
    if (onUpload) {
      onUpload(newImages.map((image) => image.file));
    }
  };

  return (
    <div className='flex flex-col space-y-2'>
      <div className='text-gray-500 text-md'>Upload Event Album</div>
      <div className='flex w-full'>
        {images.map((image, index) => (
          <div key={index} className="relative inline-block">
            <img src={image.url} alt="Uploaded" style={{ width: '100px' }} />
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
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              multiple={multiple}
              className="hidden"
            />
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

ImageUpload.propTypes = {
  multiple: PropTypes.bool,
  onUpload: PropTypes.func.isRequired,
};

export default ImageUpload;