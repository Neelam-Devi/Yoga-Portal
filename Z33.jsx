import React from "react";
import yogaImage from "../assets/yoga.jpg"; // Add your own image in the assets folder

export default function Z33() {
  return (
    <div className="bg-[#f9f9f7] text-[#333] font-serif p-8 md:flex items-center gap-8">
      {/* Image */}
      <div className="md:w-1/2">
        <img
          src={yogaImage}
          alt="Yoga Session"
          className="rounded-2xl w-full object-cover"
        />
      </div>

      {/* Text Content */}
      <div className="md:w-1/2 mt-6 md:mt-0">
        <h2 className="text-4xl font-bold mb-4">
          Getting started with <br /> yoga solution.
        </h2>
        <p className="mb-4 text-sm leading-relaxed">
          Embrace the flow of mindful movement and balance at our yoga studio.
          Awaken your body and calm your mind through gentle yet powerful practices. With
          each session, experience deeper connection, inner peace, and rejuvenation. Let
          your journey to wellness and harmony begin where every movement brings you
          closer to balance and tranquility.
        </p>
        <p className="mb-6 text-sm leading-relaxed">
          Embrace the flow of mindful movement and balance at our yoga studio. Awaken your
          body and calm your mind through gentle yet powerful practices. With each
          session, experience deeper connection.
        </p>
        <button className="px-6 py-2 bg-[#5e6957] text-white font-semibold rounded shadow-md hover:bg-[#4a5647]">
          Read More
        </button>
      </div>
    </div>
  );
}