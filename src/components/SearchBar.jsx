import React from 'react'

function SearchBar({searchMovie,setSearchMovie,fetchMovieData}) {
  return (
    <div className='main flex justify-center py-5 px-5'>
        <input type="text" value={searchMovie} onChange={(e)=>setSearchMovie(e.target.value)} placeholder='Search' className='rounded-l-lg w-80 bg-gray-200 placeholder-gray-400 px-2 py-2 outline-none border-2 border-gray-500 text-black' />
        <button onClick={fetchMovieData} className='bg-[#40407a] px-4 text-white rounded-r-lg'>
          Search
        </button>
    </div>
  )
}

export default SearchBar
