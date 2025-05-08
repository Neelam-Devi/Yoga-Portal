
// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import ReactPlayer from "react-player";
// import VideoGallery from "./VideoGallery";

// const VideoDetail = () => {
//   const { id } = useParams(); 
//   const [video, setVideo] = useState(null);

//   useEffect(() => {
//     axios
//       .get(`http://sl.fitofyy.com/singlevideo/${id}`)
//       .then((response) => {
//         console.log(response,"===response===")
//         console.log("single",response.data[0])
//         setVideo(response?.data[0]);
//       })
//       .catch((error) => {
//         console.error("Error fetching video details:", error);
//       });
//   }, [id]);

  
//   if (!video) return <div>Loading...</div>;

//   return (
    
//     <div className="w-full mb-8 px-4 md:px-20 bg-slate-300 h-[550px]"  >
     
//   <ReactPlayer
//     url={video.vurl_dash}
//     controls
//     playing
//     width="100%"
//     height="100%"
//   />
//     <VideoGallery/>
  
// </div>

//   );
// };

// export default VideoDetail;

// import { useParams } from "react-router-dom";
// import { useEffect, useState, useRef } from "react";
// import axios from "axios";
// import ReactPlayer from "react-player";
// import VideoGallery from "./VideoGallery";

// const VideoDetail = () => {
//   const { id } = useParams(); 
//   const [video, setVideo] = useState(null);
//   const scrollToRef = useRef(null); 

//   useEffect(() => {
//     axios
//       .get(`http://sl.fitofyy.com/singlevideo/${id}`)
//       .then((response) => {
//         setVideo(response?.data[0]);
//       })
//       .catch((error) => {
//         console.error("Error fetching video details:", error);
//       });
//   }, [id]);

//   const handleScroll = () => {
    
//     if (scrollToRef.current) {
//       scrollToRef.current.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   if (!video) return <div className="text-center py-20">Loading...</div>;

//   return (
//     <div className="px-4 md:px-8 lg:px-16 py-8">
//       <div className="w-full mb-8 px-4 md:px-8 bg-black" style={{ height: "350px" }}>
//         <ReactPlayer
//           url={video.vurl_dash}
//           controls
//           playing
//           width="100%"
//           height="100%"
//         />
//       </div>

     
//       <button
//         className="w-full py-2 bg-blue-600 text-white text-lg font-semibold mb-4"
//         onClick={handleScroll}
//       >
//         Tap to Scroll
//       </button>

//       <div ref={scrollToRef} className="bg-gray-100 py-8">
//         <h2 className="text-2xl font-bold mb-4 text-center">More Videos</h2>
//         <VideoGallery />
//       </div>
//     </div>
//   );
// };

// export default VideoDetail;






import { useParams } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import ReactPlayer from "react-player";
import VideoGallery from "./VideoGallery";

const VideoDetail = () => {
  const { id } = useParams(); // Dynamic ID from URL
  const [video, setVideo] = useState(null);
  const scrollToRef = useRef(null);

  useEffect(() => {
    // Scroll to top when video changes (i.e., when a new video is clicked)
    window.scrollTo({ top: 0, behavior: "smooth" });

    axios
      .get(`http://sl.fitofyy.com/singlevideo/${id}`)
      .then((response) => {
        setVideo(response?.data[0]);
      })
      .catch((error) => {
        console.error("Error fetching video details:", error);
      });
  }, [id]); // Trigger when video ID changes

  const handleScroll = () => {
    if (scrollToRef.current) {
      scrollToRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!video) return <div className="text-center py-20">Loading...</div>;

  return (
    <div className="px-14 md:px-8 lg:px-16 py-9">
      <div className="w-full mb-8 px-4 md:px-8  bg-black h-[480px]" >
        <ReactPlayer
          url={video.vurl_dash}
          controls
          playing
          width="100%"
          height="100%"
        />
      </div>

      <button
        className="w-full py-2 bg-[#64725A] text-white text-lg font-semibold mb-4"
        onClick={handleScroll}
      >
        Tap to Scroll
      </button>

      <div ref={scrollToRef} className="bg-gray-100 py-8">
        <h2 className="text-2xl font-bold mb-4 text-center">More Videos</h2>
        <VideoGallery />
      </div>
    </div>
  );
};

export default VideoDetail;
