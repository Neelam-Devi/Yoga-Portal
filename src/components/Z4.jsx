

import React from 'react';

const Z4 = () => {
  return (
    <div className="relative w-full overflow-hidden 
flex items-center justify-center px-4 sm:px-8 lg:px-16 mb-0.5 mt-0.5">
      {/* 🔥 Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full max-w-7xl rounded-[clamp(24px,1.667vw,64px)] h-[clamp(380px,41.667vw,1390px)] object-cover"
      >
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* ✨ Content on Top (add as needed) */}
    </div>
  );
};

export default Z4;
