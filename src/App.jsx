// // import React from 'react';
// // import Z from './components/Z';
// // import Z1 from './components/Z1';
// // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // import VideoGallery from "./components/VideoGallery";
// // import VideoDetail from "./components/VideoDetail";
// // import Z2 from './components/Z2';

// // function App() {
// //   return (

// // <>
// //    <Z/>
// //    <Z1/>
// //     <Router>
// //       <Routes>
// //         <Route path="/" element={<VideoGallery />} />
// //         <Route path="/videos/:id" element={<VideoDetail />} />
// //       </Routes>
// //     </Router>
      
// //       <Z2/>
// //  </>
    
// //   );
// //  }

// //  export default App;


// // import React from 'react';
// // import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
// // import Z from './components/Z';
// // import Z1 from './components/Z1';
// // import Z2 from './components/Z2';
// // import VideoGallery from "./components/VideoGallery";
// // import VideoDetail from "./components/VideoDetail";

// // function AppLayout() {
// //   const location = useLocation();
// //   const isVideoDetailPage = location.pathname.startsWith("/videos/");

// //   return (
// //     <>
// //       {!isVideoDetailPage && <Z />}
// //       {!isVideoDetailPage && <Z1 />}

// //       <Routes>
// //         <Route path="/" element={<VideoGallery />} />
// //         <Route path="/videos/:id" element={<VideoDetail />} />
// //       </Routes>

// //       {!isVideoDetailPage && <Z2 />}
// //     </>
// //   );
// // }

// // function App() {
// //   return (
// //     <Router>
// //       <AppLayout />
// //     </Router>
// //   );
// // }

// // export default App;




// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
// import Z from './components/Z';
// import Login from './components/Login';
// import Z1 from './components/Z1';
// import Z2 from './components/Z2';
// import Z4 from './components/Z4';
// import Z41 from './components/Z41';
// import Z32 from './components/Z32';
// import Z33 from './components/Z33';
// import Z42 from './components/Z42';
// import VideoGallery from "./components/VideoGallery";
// import VideoDetail from "./components/VideoDetail";




// function AppLayout() {
//   const location = useLocation();
//   const isVideoDetailPage = location.pathname.startsWith("/videos/");
//   const isLoginPage = location.pathname === "/login";


//   return (
//     <>
    
//     { !isLoginPage &&  <Z/>} 
       
//        {!isVideoDetailPage && !isLoginPage && <Z1 />} 

//       <Routes>
//         <Route path="/login" element={<Login />} />
//         <Route path="/" element={<VideoGallery />} />
//         <Route path="/" element={<Z1 />} />
//         <Route path="/videos/:id" element={<VideoDetail />} />
//       </Routes> 

      
//        {!isVideoDetailPage && !isLoginPage && <Z2 />} 
//        {!isVideoDetailPage && !isLoginPage &&<Z4 />}
//        {!isVideoDetailPage && !isLoginPage &&<Z41 />}
//        {!isVideoDetailPage && !isLoginPage && <Z32 />}
//        {!isVideoDetailPage && !isLoginPage && <Z33 />}
//        {!isVideoDetailPage && !isLoginPage && <Z42 />}
     

//       </>
//   );
// } 

// // Main App component
// function App() {
//   return (
//     <Router>
//       <AppLayout />
//     </Router>
    
//   );
// }

// export default App;


// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
// import Z from './components/Z';
// import Login from './components/Login';
// import Z1 from './components/Z1';
// import Z2 from './components/Z2';
// import Z4 from './components/Z4';
// import Z41 from './components/Z41';
// import Z32 from './components/Z32';
// import Z33 from './components/Z33';
// import Yoga from './components/Yoga';




// import Z42 from './components/Z42';
// import VideoGallery from "./components/VideoGallery";
// import VideoDetail from "./components/VideoDetail";

// function AppLayout() {
//   const location = useLocation();
//   const isVideoDetailPage = location.pathname.startsWith("/videos/");
//   const isLoginPage = location.pathname === "/login";
  

//   return (
//     <>
//       {!isLoginPage && <Z />}

//       <Routes>
//         <Route
//           path="/"
//           element={
//             <>
//               <Z1 />
//               <div id="video-section">
//                 <VideoGallery />
//               </div>
//             </>
//           }
//         />
//         <Route path="/login" element={<Login />} />
//         <Route path="/videos/:id" element={<VideoDetail />} />
//         <Route path="/yoga-details" element={<Yoga />} />
        
//       </Routes>

//       {!isVideoDetailPage && !isLoginPage && <Z2 />}
//       {!isVideoDetailPage && !isLoginPage && <Z4 />}
//       {!isVideoDetailPage && !isLoginPage && <Z41 />}
//       {!isVideoDetailPage && !isLoginPage && <Z32 />}
//       {!isVideoDetailPage && !isLoginPage && <Z33 />}

      
     


//       {!isVideoDetailPage && !isLoginPage && <Z42 />}
//     </>
//   );
// }

// function App() {
//   return (
//     <Router>
//       <AppLayout />
//     </Router>
//   );
// }

// export default App;




// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
// import Z from './components/Z';
// import Login from './components/Login';
// import Z1 from './components/Z1';
// import Z2 from './components/Z2';
// import Z4 from './components/Z4';
// import Z41 from './components/Z41';
// import Z32 from './components/Z32';
// import Z33 from './components/Z33';
// import Yoga from './components/Yoga';
// import Z42 from './components/Z42';
// import VideoGallery from "./components/VideoGallery";
// import VideoDetail from "./components/VideoDetail";
// import { Search } from './components/Search';

// function AppLayout() {
//   const location = useLocation();
//   const isVideoDetailPage = location.pathname.startsWith("/videos/");
//   const isLoginPage = location.pathname === "/login";
//   const isYogaPage = location.pathname === "/yoga-details"; 

//   // If it's the Yoga page, show only the Yoga component
//   if (isYogaPage) {
//     return <Yoga />;
//   }

//   return (
//     <>
//       {!isLoginPage &&  <Z />}

//       <Routes>
//         <Route
//           path="/"
//           element={
//             <>
//               <Z1 />
//               <div id="video-section">
//                 <VideoGallery />
//               </div>
//             </>
//           }
//         />
//         <Route path="/login" element={<Login />} />
//         <Route path="/videos/:id" element={<VideoDetail />} />
//         <Route path="/yoga-details" element={<Yoga />} />
//         <Route path='/search'  element={<Search/>} />
        



//       </Routes>

//  {!isVideoDetailPage && !isLoginPage && <Z2 />}
//       {!isVideoDetailPage && !isLoginPage && <Z4 />}
//       {!isVideoDetailPage && !isLoginPage && <Z41 />}
//       {!isVideoDetailPage && !isLoginPage && <Z32 />}
//       {!isVideoDetailPage && !isLoginPage && <Z33 />}
//       {!isVideoDetailPage && !isLoginPage && <Z42 />}
  
//     </>
//   );
// } 



// function App() {
//   return (
//     <Router>
//       <AppLayout />
//     </Router>
//   );
// }

// export default App;







import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Z from './components/Z';
import Login from './components/Login';
import Z1 from './components/Z1';
import Z2 from './components/Z2';
import Z4 from './components/Z4';
import Z41 from './components/Z41';
import Z32 from './components/Z32';
import Z33 from './components/Z33';
import Yoga from './components/Yoga';
import Z42 from './components/Z42';
import VideoGallery from "./components/VideoGallery";
import VideoDetail from "./components/VideoDetail";
import { Search } from './components/Search';
//  import Auth from './components/Auth';

function AppLayout() {
  const location = useLocation();
  const isVideoDetailPage = location.pathname.startsWith("/videos/");
   const isLoginPage = location.pathname === "/login";
  const isYogaPage = location.pathname === "/yoga-details";
  const isSearchPage = location.pathname === "/search";

  // ✅ Only Yoga component visible on yoga page
  if (isYogaPage) {
    return <Yoga />;
  }

  return (
    <>
      {/* ✅ Navbar visible on all pages except login */}
      {!isLoginPage && <Z />} 

      <Routes>
        {/* ✅ Search page shows ONLY <Search /> */}
        <Route path="/search" element={<Search />} />
        
        {/* ✅ Home page */}
        {!isSearchPage && (
          <Route
            path="/"
            element={
              <>
              {/* <Auth> */}

                <Z1 />
                <div id="video-section">
                  <VideoGallery />
                </div>
                {/* </Auth> */}
              </>
            }
          />
        )}

        <Route path="/login" element={<Login />} />
        <Route path="/videos/:id" element={<VideoDetail />} />
        <Route path="/yoga-details" element={<Yoga />} />
      </Routes>

      {/* ✅ Other components hidden on login, video detail, or search page */}
      {!isVideoDetailPage && !isLoginPage && !isSearchPage && <Z2 />}
      {!isVideoDetailPage && !isLoginPage && !isSearchPage && <Z4 />}
      {!isVideoDetailPage && !isLoginPage && !isSearchPage && <Z41 />}
      {!isVideoDetailPage && !isLoginPage && !isSearchPage && <Z32 />}
      {!isVideoDetailPage && !isLoginPage && !isSearchPage && <Z33 />}
      {!isVideoDetailPage && !isLoginPage && !isSearchPage && <Z42 />}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

export default App;
