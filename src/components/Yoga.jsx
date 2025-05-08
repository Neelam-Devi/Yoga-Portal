// import React from "react";
// // import Z33 from "/src/images/about-img-2.jpg"; // Add your own image in the assets folder

// export default function Z333() {
//   return (
//     <div className="bg-[#f9f9f7] text-[#333] font-serif p-8 md:flex items-center gap-8">
      
//       <div className="md:w-1/2">
//         <img
//           src={"/src/images/about-img-2.jpg"}
//           alt="Yoga Session"
//           className="rounded-2xl w-full object-cover"
//         />
//       </div>

//       {/* Text Content */}
//       <div className="md:w-1/2 mt-6 md:mt-0">
//         <h2 className="text-4xl font-bold mb-4">
//           Getting started with <br /> yoga solution.
//         </h2>
//         <p className="mb-4 text-sm leading-relaxed">
//           Embrace the flow of mindful movement and balance at our yoga studio.
//           Awaken your body and calm your mind through gentle yet powerful practices. With
//           each session, experience deeper connection, inner peace, and rejuvenation. Let
//           your journey to wellness and harmony begin where every movement brings you
//           closer to balance and tranquility.
//         </p>
//         <p className="mb-6 text-sm leading-relaxed">
//           Embrace the flow of mindful movement and balance at our yoga studio. Awaken your
//           body and calm your mind through gentle yet powerful practices. With each
//           session, experience deeper connection.Embrace the flow of mindful movement and balance at our yoga studio. Awaken your body and calm your mind through gentle yet powerful practices. With each session, experience deeper connection, inner peace, and rejuvenation. Let your journey to wellness and harmony begin here, where every movement brings you closer to balance and tranquility.
//         </p>
       
//       </div>
//     </div>
//   );
// }


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
        Awakening inner harmony through yoga involves a conscious effort to align the body, mind, and spirit, fostering a sense of well-being and inner peace. This is achieved through practices like meditation, mindfulness, and focused breathing, all of which help to cultivate a heightened state of awareness and connect with one's inner potential.
        </p>
      </div>
    </div>
    </>
  );
}
