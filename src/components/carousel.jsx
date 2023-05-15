import React, { useState } from "react";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div className="relative">
      <div className="flex items-center justify-center overflow-hidden">
        <img
          src={images[currentIndex]}
          alt={`Image ${currentIndex + 1}`}
          className="w-full max-w-full rounded-lg"
        />
      </div>
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white rounded-full px-4 py-2 hover:bg-gray-700 focus:outline-none"
        onClick={handlePrev}
      >
        &#8249;
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white rounded-full px-4 py-2 hover:bg-gray-700 focus:outline-none"
        onClick={handleNext}
      >
        &#8250;
      </button>
    </div>
  );
};

export default Carousel;
