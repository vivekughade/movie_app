import Navbar from "./components/Navbar"
import SearchBar from "./components/SearchBar"
import MovieCard from "./components/MovieCard"
import './App.css'
import { useState } from "react";

function App() {
  const[allMovieData,setallMovieData]=useState([]);
   const[searchMovie,setSearchMovie] = useState('');
   const[loading,setLoading] = useState(false);

   const fetchMovieData = async () =>{
    try {
      setLoading(true);
      const res = await fetch(`https://omdbapi.com/?s=${searchMovie}&apikey=a1de9591`);
      const data = await res.json();
      setallMovieData(data.Search);
      console.log(data.Search)
      setLoading(false) 
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
   }


  return (
    <>
      <Navbar/>
      <div className="bg">

     
      <SearchBar searchMovie={searchMovie} setSearchMovie={setSearchMovie} fetchMovieData={fetchMovieData}/>
      <MovieCard allMovieData={allMovieData} loading={loading}/>
       </div>
    </>
  )
}

export default App
