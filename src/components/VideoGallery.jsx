

// import { useEffect, useState } from "react";
// import axios from "axios";
// import { Link, useLocation } from "react-router-dom";
// import ReactPaginate from "react-paginate";
// import './VideoGallery.css'; 

// const VideoGallery = () => {
//   const [videos, setVideos] = useState([]);
//   const [currentPage, setCurrentPage] = useState(0);

//   const {pathname} = useLocation();
//   console.log(pathname.includes('videos'))


//   const videosPerPage = 15;

//   useEffect(() => {
//     axios
//       .get("http://sl.fitofyy.com/videos/")
//       .then((response) => setVideos(response.data))
//       .catch((error) => console.error("Error fetching videos:", error));
//   }, []);

//   const pageCount = Math.ceil(videos.length / videosPerPage);
//   const offset = currentPage * videosPerPage;
//   const currentVideos = videos.slice(offset, offset + videosPerPage);

//   const handlePageClick = ({ selected }) => {
//     setCurrentPage(selected);
//   };

//   return (
//     <div className="p-4">
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {currentVideos.map((video, index) => (
//           <Link to={`/videos/${video.id}`} key={index}>
             
//  <div className="aspect-video bg-grey rounded-lg overflow-hidden shadow-lg hover:shadow-4xl transition-shadow duration-300 relative">

  
//               <img
//                 src={video.imageSevenUrl}
//                 alt={video.name}
//                 className="absolute inset-0 w-full h-full object-cover"
//               />
//               <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black to-transparent">
               
//                 <p className="text-white">{video.views} Views</p>
//               </div>
//             </div>
//           </Link>




//         ))}
//       </div>

     
//       <div className="flex justify-center mt-8">
//         <ReactPaginate
//           previousLabel={"←"}
//           nextLabel={"→"}
//           breakLabel={"..."}
//           pageCount={pageCount}
//           marginPagesDisplayed={1}
//           pageRangeDisplayed={2}
//           onPageChange={handlePageClick}
//           containerClassName={"pagination"}
//           activeClassName={"active"}
//           pageClassName={"page"}
//           previousClassName={"page"}
//           nextClassName={"page"}
//           breakClassName={"page"}
//         />
//       </div>
//     </div>
//   );
// };

// export default VideoGallery;


// ------final-----

// import { useEffect, useState } from "react";
// import axios from "axios";
// import { Link, useLocation } from "react-router-dom";
// import ReactPaginate from "react-paginate";
// import './VideoGallery.css';

// const VideoGallery = () => {
//   const [videos, setVideos] = useState([]);
//   const [currentPage, setCurrentPage] = useState(0);

//   const { pathname } = useLocation();
//   console.log(pathname.includes('videos'));

//   const videosPerPage = 15;

//   useEffect(() => {
//     axios
//       .get("http://sl.fitofyy.com/videos/")
//       .then((response) => setVideos(response.data))
//       .catch((error) => console.error("Error fetching videos:", error));
//   }, []);

//   const pageCount = Math.ceil(videos.length / videosPerPage);
//   const offset = currentPage * videosPerPage;
//   const currentVideos = videos.slice(offset, offset + videosPerPage);

//   const handlePageClick = ({ selected }) => {
//     setCurrentPage(selected);
//   };

//   return (
//     <div className="p-4">
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {currentVideos.map((video, index) => (
//           <Link to={`/videos/${video.id}`} key={index}>
            
//             <div className="video-card">
//               <div className="relative aspect-video">
//                 <img
//                   src={video.imageSevenUrl}
//                   alt={video.name}
//                   className="absolute inset-0 w-full h-full object-cover"
//                 />
//                 <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black to-transparent">
//                   <p className="text-white ">{video.views} Views</p>
//                 </div>
//               </div>
//             </div>
//           </Link>
//         ))}
//       </div>

//       <div className="flex justify-center mt-8">
//         <ReactPaginate
//           previousLabel={"←"}
//           nextLabel={"→"}
//           breakLabel={"..."}
//           pageCount={pageCount}
//           marginPagesDisplayed={1}
//           pageRangeDisplayed={2}
//           onPageChange={handlePageClick}
//           containerClassName={"pagination"}
//           activeClassName={"active"}
//           pageClassName={"page"}
//           previousClassName={"page"}
//           nextClassName={"page"}
//           breakClassName={"page"}
//         />
//       </div>
//     </div>
//   );
// };

// export default VideoGallery;




import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import ReactPaginate from "react-paginate";
import './VideoGallery.css';

const VideoGallery = () => {
  const [videos, setVideos] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const searchTerm = queryParams.get("value")?.toLowerCase() || "";

  const videosPerPage = 15;

  useEffect(() => {
    axios
      .get("https://backendhausa.onrender.com/videos/")
      .then((response) => setVideos(response.data))
      .catch((error) => console.error("Error fetching videos:", error));
  }, []);

  const filteredVideos = videos.filter((video) =>
    video.name.toLowerCase().includes(searchTerm)
  );

  const pageCount = Math.ceil(filteredVideos.length / videosPerPage);
  const offset = currentPage * videosPerPage;
  const currentVideos = filteredVideos.slice(offset, offset + videosPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <div className="p-4">
      {searchTerm && (
        <h2 className="text-xl font-semibold mb-4 text-center text-white">
          Results for: <span className="text-amber-300">{searchTerm}</span>
        </h2>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentVideos.length > 0 ? (
          currentVideos.map((video, index) => (
            <Link to={`/videos/${video.id}`} key={index}>
              <div className="aspect-video bg-grey rounded-lg overflow-hidden shadow-lg hover:shadow-4xl transition-shadow duration-300 relative">
                <img
                  src={video.imageSevenUrl}
                  alt={video.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black to-transparent">
                  <p className="text-white">{video.views} Views</p>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-white text-center col-span-full">No videos found.</p>
        )}
      </div>

      {filteredVideos.length > videosPerPage && (
        <div className="flex justify-center mt-8">
          <ReactPaginate
            previousLabel={"←"}
            nextLabel={"→"}
            breakLabel={"..."}
            pageCount={pageCount}
            marginPagesDisplayed={1}
            pageRangeDisplayed={2}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            activeClassName={"active"}
            pageClassName={"page"}
            previousClassName={"page"}
            nextClassName={"page"}
            breakClassName={"page"}
          />
        </div>
      )}
    </div>
  );
};

export default VideoGallery;
