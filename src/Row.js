import React, {useState , useEffect} from 'react';
// import requests from './requests';
import axios from './axios';
import './Row'
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
const base_url = "https://image.tmdb.org/t/p/original";
function Row({titles,fetchUrl,isLargeRow}){
    const [movies,setMovies] = useState([]);
    const [trailerUrl,setTrailerUrl] = useState("");
    //snippet of code running on specific conditions.
    useEffect(() => {
        //if [] the useEffect code will run only once but if we add movies to it it will run everytime the movies change.
        async function fetchData() {
          const request = await axios.get(fetchUrl);
        //   console.log(request.data.results);
          setMovies(request.data.results);
          return request;
        }
        fetchData();
      }, [fetchUrl]);
      // console.log(movies);
      const opts = {
        height: "390",
        width: "100%",
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
      const handleClick = (movie)=>{
        if(trailerUrl){
          setTrailerUrl('');
        }else{
          movieTrailer(movie?.name || "").then((url)=>{
            const urlParams = new URLSearchParams(new URL(url).search);
            setTrailerUrl(urlParams.get("v"));
          })
          .catch((error)=>console.log(error));
        }
      };
    return(
        <div className = "row">
            <h2>{titles}</h2>
            <div className="row_posters">
                {/*row posters*/}
                {movies.map((movie)=>(
                    <img key = {movie.id} 
                    onClick={()=>handleClick(movie)}
                    className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                    src={`${base_url}${isLargeRow ? movie.poster_path:movie.backdrop_path}`} 
                    alt={movie.name}/>
                ))}
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
    )
};
export default Row;