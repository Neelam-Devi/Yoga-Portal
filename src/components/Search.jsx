// import React from 'react'

// export const Search = () => {

//   const params = new URLSearchParams(window.location.search)
//   const value = params.get('value')

//   console.log(value)





//   return (
//     <div>Search</div>
//   )
// }



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';

export const Search = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const { search } = useLocation();

  const searchTerm = new URLSearchParams(search).get('value'); // Get search term from the URL

  useEffect(() => {
    if (searchTerm) {
      setLoading(true);
      axios
        .get(`https://backendhausa.onrender.com/search?keyword=${searchTerm}`)
        .then((res) => setVideos(res.data || []))
        .catch((err) => {
          console.error('Error fetching videos:', err);
          setVideos([]);
        })
        .finally(() => setLoading(false));
    }
  }, [searchTerm]);

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Search Results for "{searchTerm}"</h2>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.length === 0 ? (
            <p>No videos found.</p>
          ) : (
            videos.map((video) => (
              <Link to={`/videos/${video.id}`} key={video.id}>
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
          )}
        </div>
      )}
    </div>
  );
};
