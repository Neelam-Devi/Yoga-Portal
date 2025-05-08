// // import React from 'react';

// // const Z1 = () => {
// //   return (
// //     <>

// // <div className="flex min-h-screen">
  
// //   <div className="w-1/2 flex items-center justify-center bg-white text-black p-8">
// //     <div>
// //       <h1 className="text-[40px]   font-serif mb-4 font-[28px] ">
// //         Experience balance and inner harmony at our yoga studio.
// //       </h1>
// //       <p className="text-lg mb-6 font-sans">
// //         Embrace the flow of mindful movement and balance at our yoga studio. Awaken your body and calm your mind through gentle yet powerful practices. With each session, experience deeper connection, inner peace, and rejuvenation. Let your journey to wellness and harmony begin here, where every movement brings you closer to balance and tranquility.
// //       </p>
// //       <button className="mt-4 px-6 py-3 bg-[#64725A] text-white rounded-lg hover:bg-[#64725A] transition">
// //         Enroll Now
// //       </button>
// //       <button className="mt-4 ml-2 px-6 py-3 bg-[#E5E8E3] text-[#64725A] rounded-lg hover:bg-[#64725A] transition">
// //         Join Now
// //       </button>
// //     </div>
// //   </div>

   
// //   <div
// //     className="w-1/2 bg-cover bg-center"
// //     style={{ backgroundImage: "url('/src/images/hero-img.png')" }}> 
// //     </div>
// // </div>

// //        <div className="background bg-cover bg-center bg-[#FAFAFA]   #0C0D11max-h-100 flex items-center justify-center text-white px-4">  
      
// //      <h1 className="text-3xl md:text-6xl font-[280px]  font-serif mb-25  mt-20 ml-96 text-center text-[#0C0D11] w-full">Experience Tranquility and movement</h1>
// //      <p className="text-lg mb-6 mr-1 font-sans ">
// //         Embrace the flow of mindful movement and balance at our yoga studio. 
// //       </p>
// //      </div>   

// //     </>
// //   )
// // }

// // export default Z1;

// // final code that use before


// import React from 'react';

// const Z1 = () => {
//   return (
//     <>
//       <div className="flex flex-col md:flex-row min-h-screen">
        
//         <div className="w-full md:w-1/2 flex items-center justify-center bg-white text-black p-6 md:p-8">
//           <div className="max-w-xl text-center md:text-left">
//             <h1 className="text-3xl md:text-[40px] font-serif mb-4">
//               Experience balance and inner harmony at our yoga portal.
//             </h1>
//             <p className="text-base md:text-lg mb-6 font-sans">
//               Embrace the flow of mindful movement and balance at our yoga portal. Awaken your body and calm your mind through gentle yet powerful practices. With each session, experience deeper connection, inner peace, and rejuvenation. Let your journey to wellness and harmony begin here, where every movement brings you closer to balance and tranquility.
//             </p>
//             <div className="flex flex-col sm:flex-row justify-center md:justify-start">
              
//               <button className="mb-2 sm:mb-0 sm:mr-2 px-6 py-3 bg-[#64725A] text-white rounded-lg shadow-lg  
//                hover:bg-[#556249] transition"> 
//   Explore More...
// </button>

             
//               <button className="px-6 py-3 bg-[#E5E8E3] text-[#64725A] rounded-lg hover:bg-[#64725A] hover:text-white shadow-lg transition">
//   Join Now
// </button>

//             </div>
//           </div>
//         </div>

        
//         <div
//           className="w-full md:w-1/2 h-64 md:h-auto bg-cover bg-center"
//           style={{ backgroundImage: "url('/src/images/hero-img.png')" }}
//         ></div>
//       </div>

      
//       <div className="bg-[#FAFAFA] flex flex-col items-center justify-center text-center  text-[#0C0D11] px-4 py-16">
//         <h1 className="text-2xl sm:text-3xl md:text-5xl font-serif mb-6 max-w-2xl">
//           TOP Level Yoga Videos....
//         </h1>
//         <p className="text-base sm:text-lg font-sans max-w-xl">
//           Embrace the flow of mindful movement and balance at our yoga portal.
//         </p>
//       </div>
//     </>
//   );
// };

// export default Z1;

import React from 'react';

const Z1 = () => {
  const handleExploreClick = () => {
    const section = document.getElementById("video-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="flex flex-col md:flex-row min-h-screen">
        {/* Left Side: Content */}
        <div className="w-full md:w-1/2 flex items-center justify-center bg-white text-black p-6 md:p-8">
          <div className="max-w-xl text-center md:text-left">
            <h1 className="text-3xl md:text-[40px] font-serif mb-4">
              Experience balance and inner harmony at our yoga portal.
            </h1>
            <p className="text-base md:text-lg mb-6 font-sans">
              Embrace the flow of mindful movement and balance at our yoga portal. Awaken your body and calm your mind through gentle yet powerful practices. With each session, experience deeper connection, inner peace, and rejuvenation. Let your journey to wellness and harmony begin here, where every movement brings you closer to balance and tranquility.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start">
              <button
                onClick={handleExploreClick}
                className="mb-2 sm:mb-0 sm:mr-2 px-6 py-3 bg-[#E5E8E3] text-[#64725a] rounded-lg shadow-lg hover:bg-[#556249] hover:text-white transition"
              >
                Explore More...
              </button>

              {/* <button className="px-6 py-3 bg-[#E5E8E3] text-[#64725A] rounded-lg shadow-lg hover:bg-[#64725A] hover:text-white transition">
                Explore More
              </button> */}
            </div>
          </div>
        </div>

        {/* Right Side: Background Image */}
        {/* <div
          className="w-full md:w-1/2 h-[27rem]  md:h-auto bg-cover bg-center"
          style={{ backgroundImage: "url('/hero-img.png')" }}
        ></div> */}
        <div
  className="w-full md:w-1/2 aspect-[4/3] md:aspect-auto bg-center bg-no-repeat bg-contain md:bg-cover"
  style={{ backgroundImage: "url('/hero-img.png')" }}
></div>


      </div>

      {/* Bottom Section */}
      <div className="bg-[#FAFAFA] flex flex-col items-center justify-center text-center text-[#0C0D11] px-4 py-16">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-serif mb-6 max-w-2xl">
          TOP Level Yoga Videos....
        </h1>
        <p className="text-base sm:text-lg font-sans max-w-xl">
          Embrace the flow of mindful movement and balance at our yoga portal.
        </p>
      </div>
    </>
  );
};

export default Z1;


