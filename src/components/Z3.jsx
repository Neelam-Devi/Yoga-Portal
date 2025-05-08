import React, { useState } from 'react';

const images = [
  "/public/images/img-2.jpg",
  "/public/images/img-4.jpg",
  "/public/images/img-1.jpg",
  "/public/images/img-3.jpg",
  "/public/images/img-2.jpg",
  "/public/images/img-4.jpg",
  "/public/images/img-2.jpg",
  "/public/images/img-4.jpg",
];

const groupedImages = [];
for (let i = 0; i < images.length; i += 4) {
  groupedImages.push(images.slice(i, i + 4));
}

const Z3 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? groupedImages.length - 1 : currentIndex - 1);
  };

  const nextSlide = () => {
    setCurrentIndex(currentIndex === groupedImages.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div className="relative w-full max-w-[1400px] mx-auto h-[420px] overflow-hidden mt-5">
      <div
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{
          width: `${groupedImages.length * 100}%`,
          transform: `translateX(-${currentIndex * (100 / groupedImages.length)}%)`
        }}
      >
        {groupedImages.map((group, idx) => (
          <div key={idx} className="w-full flex-shrink-0 flex gap-5">
            {group.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Slide ${idx * 4 + i + 1}`}
                className="w-1/4 h-full object-cover rounded-2xl shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105"
              />
            ))}
          </div>
        ))}
      </div>

      {/* Prev and Next buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-full hover:bg-gray-700"
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-full hover:bg-gray-700"
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 w-full flex justify-center space-x-2">
        {groupedImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-black' : 'bg-gray-400'}`}
          ></button>
        ))}
      </div>
    </div>


  );
};

export default Z3;
