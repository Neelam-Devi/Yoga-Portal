






// veery very final


// import React, { useState, useEffect } from 'react';
// import { Menu, X, Search } from 'lucide-react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

// const Z = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [results, setResults] = useState([]);

//   useEffect(() => {
//     if (!searchTerm.trim()) {
//       setResults([]);
//       return;
//     }

//     const delayDebounce = setTimeout(() => {
//       setLoading(true);
//       axios
//         .get(`http://sl.fitofyy.com/search?keyword=${searchTerm}`)
//         .then((res) => setResults(res.data || []))
//         .catch((err) => {
//           console.error('Search error:', err);
//           setResults([]);
//         })
//         .finally(() => setLoading(false));
//     }, 500);

//     return () => clearTimeout(delayDebounce);
//   }, [searchTerm]);

//   return (
//     <div className="navbar bg-black shadow-md px-4 h-[112px] ">
//       <div className="flex items-center justify-between">
//         {/* Logo */}
//         <Link to="/" className="flex items-center space-x-2">
//           <img src="/src/images/14.png" alt="Logo" className="w-24 md:w-32 h-[112px]" />
//           <span className="text-lg md:text-xl font-semibold text-green-100">Yoga</span>
//         </Link>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex items-center space-x-6">
//           {/* Search */}
//           <label
//             htmlFor="search-bar"
//             className="relative flex items-center bg-white border rounded-2xl shadow-md px-2 py-1.5"
//           >
//             <Search size={16} className="text-black ml-1" />
//             <input
//               id="search-bar"
//               type="text"
//               placeholder="Search..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="px-2 py-1 text-sm text-black outline-none bg-transparent w-44"
//             />
//             <button
//               disabled={loading}
//               className="bg-[#64725A] hover:bg-[#4b5946] text-white text-xs px-4 py-3 rounded-xl ml-2 disabled:opacity-60"
//             >
//               {loading ? '...' : 'Search'}
//             </button>
//           </label>

//           {/* Results */}
//           {results.length > 0 && (
//             <div className="absolute top-14 left-1/2 transform -translate-x-1/2 w-[320px] bg-white rounded-md shadow-lg z-50 max-h-60 overflow-y-auto">
//               {results.map((video) => (
//                 <Link
//                   to={`/videos/${video.id}`}
//                   key={video.id}
//                   onClick={() => {
//                     setSearchTerm('');
//                     setResults([]);
//                   }}
//                   className="block px-4 py-2 text-sm hover:bg-gray-100 text-black border-b"
//                 >
//                   {video.name}
//                 </Link>
//               ))}
//             </div>
//           )}

//           {/* Login Button */}
//           <Link
//             to="/login"
//             className="bg-[#64725A] hover:bg-[#4b5946] text-white text-md font-semibold px-7 py-3.5 rounded-xl"
//           >
//             Login
//           </Link>
//         </div>

//         {/* Mobile Menu Button */}
//         <div className="md:hidden">
//           <button onClick={() => setMenuOpen(!menuOpen)}>
//             {menuOpen ? <X size={24} color="white" /> : <Menu size={24} color="white" />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu Dropdown */}
//       {menuOpen && (
//         <div className="md:hidden mt-2 space-y-2 px-2 pb-3 text-white">
//           {/* Search */}
//           <label htmlFor="mobile-search" className="flex flex-col gap-2 bg-white p-2 rounded-xl">
//             <input
//               id="mobile-search"
//               type="text"
//               placeholder="Search..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="px-3 py-2 text-sm text-black rounded-md outline-none"
//             />
//             <button
//               disabled={loading}
//               className="bg-black text-white text-sm py-2 rounded-xl"
//             >
//               {loading ? 'Loading...' : 'Search'}
//             </button>
//           </label>

//           {/* Login */}
//           <Link
//             to="/login"
//             className="block bg-[#64725A] hover:bg-[#4b5946] text-white text-sm text-center py-2 rounded-xl"
//           >
//             Login
//           </Link>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Z;






import React, { useState, useEffect } from 'react';
import { Menu, X, Search } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie'

const Z = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  console.log(searchTerm,"==searchtearm===")
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!searchTerm.trim()) {
      setResults([]);
      return;
    }

    const delayDebounce = setTimeout(() => {
      setLoading(true);
      axios
        .get(`http://sl.fitofyy.com/search?keyword=${searchTerm}`)
        .then((res) => setResults(res.data || []))
        .catch((err) => {
          console.error('Search error:', err);
          setResults([]);
        })
        .finally(() => setLoading(false));
    }, 500);

    return () => clearTimeout(delayDebounce);
  }, [searchTerm]);



 const  handleClick=()=>{
  console.log('handle click ')
  Cookies.remove('email')
  Cookies.remove('password')
  navigate('/login')
 }



  return (
    <div className="navbar bg-black shadow-md px-4 h-[112px] ">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src="/14.png" alt="Logo" className="w-24 md:w-32 h-[112px]" />
          <span className="text-lg md:text-xl font-semibold text-green-100">Yoga</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {/* Search */}
          <label
            htmlFor="search-bar"
            className="relative flex items-center bg-white border rounded-2xl shadow-md px-2 py-1.5"
          >
            <Search size={16} className="text-black ml-1" />
            <input
              id="search-bar"
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-2 py-1 text-sm text-black outline-none bg-transparent w-44"
            />
            <button
              disabled={loading}
              className="bg-[#64725A] hover:bg-[#4b5946] text-white text-xs px-4 py-3 rounded-xl ml-2 disabled:opacity-60"
              onClick={() => {
                if (searchTerm.trim()) {
                  navigate(`/search?value=${encodeURIComponent(searchTerm)}`);
                  setResults([]); // hide dropdown after navigation
                }
              }}
            >
              {loading ? '...' : 'Search'}
            </button>
          </label>

          {/* Results */}
          {results.length > 0 && (
            <div className="absolute top-14 left-1/2 transform -translate-x-1/2 w-[320px] bg-white rounded-md shadow-lg z-50 max-h-60 overflow-y-auto">
              {results.map((video) => (
                <Link
                  // to={`/videos/${video.id}`}
                  to={`/search?value=${encodeURIComponent(video.name)}`}
                  key={video.id}
                  onClick={() => {
                    setSearchTerm('');
                    setResults([]);
                  }}
                  className="block px-4 py-2 text-sm hover:bg-gray-100 text-black border-b"
                >
                  {video.name}
                </Link>
              ))}
            </div>
          )}

          {/* Login Button */}
          {/* <p
          onClick={handleClick}
            className="bg-[#64725A] hover:bg-[#4b5946] text-white text-md font-semibold px-7 py-3.5 rounded-xl"
          >
            Logout
          </p> */}
        </div>

        


{/* Mobile Menu Button */}
<div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} color="white" /> : <Menu size={24} color="white" />}
          </button>
        </div>
      </div>


{menuOpen && (
  <div className="md:hidden absolute top-[112px] left-0 w-full bg-black text-white p-4 space-y-4 z-50 shadow-lg">


          <label htmlFor="mobile-search" className="flex flex-col gap-2 bg-white p-2 rounded-xl">
            <input
              id="mobile-search"
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-3 py-2 text-sm text-black rounded-md outline-none"
            />
            <button
              disabled={loading}
              className="bg-black text-white text-sm py-2 rounded-xl"
              onClick={() => {
                if (searchTerm.trim()) {
                  navigate(`/search?value=${encodeURIComponent(searchTerm)}`);
                  setResults([]);
                  setMenuOpen(false);
                }
              }}
            >
              {loading ? 'Loading...' : 'Search'}
            </button>
          </label>

          
          {/* <Link
            to="/login"
            className="block bg-[#64725A] hover:bg-[#4b5946] text-white text-sm text-center py-2 rounded-xl"
            onClick={() => setMenuOpen(false)}
          >
            Login
          </Link> */}
        </div>
      )}
    </div>
  );
};

export default Z; 










