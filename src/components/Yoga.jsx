
// Yoga.js

import React from "react";
import Z from "./Z";

export default function Yoga() {
  return (
    <>
    <Z />
    <div className="bg-[#f9f9f7] text-[#333] font-serif p-8 md:flex items-center gap-8">
      
      <div className="md:w-1/2">
        <img
          src={"/about-img-2.jpg"}
          alt="Yoga Session"
          className="rounded-2xl w-full object-cover"
        />
      </div>

      <div className="md:w-1/2 mt-6 md:mt-0">
        <h2 className="text-4xl font-bold mb-4">
          Getting started with <br /> yoga solution.
        </h2>
        <p className="mb-4 text-sm leading-relaxed">
          Embrace the flow of mindful movement and balance at our yoga studio.
          Awaken your body and calm your mind through gentle yet powerful practices. With
          each session, experience deeper connection, inner peace, and rejuvenation.
        </p>
        {/* <p className="mb-6 text-sm leading-relaxed">
          Embrace the flow of mindful movement and balance at our yoga studio. Awaken your
          body and calm your mind through gentle yet powerful practices. With each
          session, experience deeper connection, inner peace, and rejuvenation. Let your
          journey to wellness and harmony begin here.
        </p> */}

<p className="mb-6 text-sm leading-relaxed">
        Yin and Yang yoga combines the principles of both styles to create a balanced practice. Yin yoga focuses on long-held poses, primarily targeting connective tissues and promoting flexibility, while Yang yoga emphasizes active movement and muscular engagement, building strength and stamina. By integrating both, practitioners can find a harmonious blend of physical and energetic well-being. 
        Yin.
        </p>
        <p className="mb-6 text-sm leading-relaxed">
        Awakening inner harmony through yoga involves a conscious effort to align the body, mind, and spirit, fostering a sense of well-being and inner peace. This is achieved through practices like meditation, mindfulness, and focused breathing, all of which help to cultivate a heightened state of awareness and connect with one inner potential.
        </p>
      </div>
    </div>
    </>
  );
}

// src/components/HeroSection.jsx
// import React from "react";
//  import Z from "./Z";
// export default function Yoga() {
//   return (
//     <>
//     <Z/>
    
//     <section className="bg-white  flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 lg:px-10 ">
      
//       {/* Left content */}
//       <div className="flex-1">
//         <div className="mb-6">
//           <div className="text-sm text-green-700 font-medium uppercase tracking-wide mb-2">
//             Peace. Awaken Your Inner Peace.
//           </div>
//           <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
//             Balance your mind and body with us.
//           </h1>
//           <p className="text-gray-600 text-base md:text-lg mb-6 mt-1">
//             Calm your mind and energize your body through powerful yet gentle yoga sessions. Begin your path to wellness and tranquility.
//           </p>
//           <div className="flex flex-wrap gap-4">
//             <button className="bg-green-800 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded shadow-md">
//               Enroll Now
//             </button>
//             <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-2 px-6 rounded border border-green-800 shadow-sm">
//               Contact Us
//             </button>
//           </div>
//         </div>

//         {/* Trusted by section */}
//         <div className="flex items-center mt-6">
//           <div className="flex -space-x-3 mr-4">
//             <img
//               src="https://randomuser.me/api/portraits/women/1.jpg"
//               alt="User"
//               className="w-10 h-10 rounded-full border-2 border-white"
//             />
//             <img
//               src="https://randomuser.me/api/portraits/men/2.jpg"
//               alt="User"
//               className="w-10 h-10 rounded-full border-2 border-white"
//             />
//             <img
//               src="https://randomuser.me/api/portraits/women/3.jpg"
//               alt="User"
//               className="w-10 h-10 rounded-full border-2 border-white"
//             />
//           </div>
//           <p className="text-sm text-gray-500">
//             Trusted by <span className="font-semibold text-gray-700">4000+ people</span>.
//           </p>
//         </div>
//       </div>

//       {/* Right image - Now larger and more responsive */}
//       {/* <div className="flex-1 flex justify-center items-center">
//         <div className="w-full max-w-[650px] aspect-square rounded-2xl overflow-hidden shadow-2xl">
//           <img
//             src="/hero-img.png"
//             alt="Yoga Pose"
//             className="w-full h-full object-cover"
//           />
//         </div>
//       </div> */}
// {/* Right image - Wider and responsive */}
// <div className="flex-1 flex justify-center items-center">
//   <div className="w-full max-w-[1000px]  h-[700px]">
//     <img
//       src="/hero-img.png"
//       alt="Yoga Pose"
//       className="w-[1000px]  object-contain rounded-2xl "
//     />
//   </div>
// </div>




//     </section>
//     </>
//   );
// }
