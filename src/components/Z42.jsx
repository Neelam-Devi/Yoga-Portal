// import React from "react";

// export default function Z42() {
//   return (
//     <div className="bg-[#5e6957] text-white font-serif p-8">
    
//       <div className="text-center py-10 border-b border-white/30">
//          <h1 className="text-4xl font-bold mb-4">Description</h1> 
//         <p className="max-w-3xl mx-auto text-md">
//           Here, I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system,
//         </p>
        
//         <button className="px-6 py-3 mt-6 bg-[#E5E8E3] text-[#64725A] rounded-lg hover:bg-[#64725A] hover:text-white shadow-lg transition">
//   Explore More
// </button>
//       </div>

    
//       </div> 
//   );
// }


import React from "react";

export default function Z42() {
  const handleExploreClick = () => {
    const section = document.getElementById("video-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-[#5e6957] text-white font-serif p-8">
      <div className="text-center py-10 border-b border-white/30">
        <h1 className="text-4xl font-bold mb-4">Description</h1>
        <p className="max-w-3xl mx-auto text-md">
          Here, I must explain to you how all this mistaken idea of denouncing
          pleasure and praising pain was born and I will give you a complete
          account of the system,
        </p>

        <button
                onClick={handleExploreClick}
                className="mb-2 sm:mb-0 sm:mr-2 mt-10 px-6 py-3 bg-[#E5E8E3] text-[#64725a] rounded-lg shadow-lg hover:bg-[#556249] hover:text-white transition"
              >
                Explore More...
              </button>
      </div>
    </div>
  );
}
