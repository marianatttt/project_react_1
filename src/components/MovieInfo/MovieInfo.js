import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";


import {axiosService, movieService} from "../../services";
import {api_img, urls, youtube} from "../../configs";
import {movieActions} from "../../redux";


const MovieInfo = ({movieId}) => {

    const {selectedMovie:movie} = useSelector((state) => state.movies)
    const dispatch = useDispatch();
    const [trailer, setTrailer] = useState(null);

    useEffect(()=>{
        dispatch(movieActions.getById({id: movieId}));
        movieService.getTrailer(movieId).then(({data}) => {
        if (data.results.length > 0) {
        setTrailer(data.results[0].key);
   }
  });
 },[movieId]);


return (
 <div>
     <div>
      {movie && (
           <h1 className="movie-title">{movie.title}</h1>
      )}
     </div>
     <div className="container_description_movie">
      {movie && (
           <div className="movie-details">
           <img className="movie-poster-one" src={api_img+movie.poster_path} alt="Movie Poster" />
           <div className="movie-info">
             <h3>Genres:</h3>
                <div>
                    {movie.genres.map((genre) => (<button className= "button_genre_movie" key={genre.id}>{genre.name}</button>))}
                </div>
            <div>
                <h3>Description</h3>
             <p className="text_movie" >{movie.overview}</p>
                <div className="movie-details-mini">
             <div className="movie-details-row">
                <h4>Vote average:</h4>{movie.vote_average.toFixed(1)}
             </div>
             <div className="movie-details-row">
                <h4>Vote count:</h4>{movie.vote_count}
             </div>
             <div className="movie-details-row">
                <h4>Release date:</h4>{movie.release_date}
             </div>
                </div>
            </div>
               {trailer && (
                   <iframe
                       title="Trailer"
                       src={youtube+`${trailer}`}
                       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                       allowFullScreen
                   ></iframe>
               )}
           </div>
          </div>
      )}
     </div>

</div>
 );
};


export {MovieInfo};











//
//
// import React, { useState, useEffect } from "react";
// import axios from "axios";
//
// const API_KEY = "ecac28005c8ad7b72d4b4147d3ad7f77";
//
// function Genre() {
//     const [movies, setMovies] = useState([]);
//     const [genres, setGenres] = useState([]);
//     const [selectedGenre, setSelectedGenre] = useState("");
//     const [currentPage, setCurrentPage] = useState(1);
//     const [totalPages, setTotalPages] = useState(1);
//
//     useEffect(() => {
//         axios
//             .get(
//                 `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${currentPage}`
//             )
//             .then((response) => {
//                 setMovies(response.data.results);
//                 setTotalPages(response.data.total_pages);
//             })
//             .catch((error) => {
//                 console.log(error);
//             });
//
//         axios
//             .get(
//                 `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`
//             )
//             .then((response) => {
//                 setGenres(response.data.genres);
//             })
//             .catch((error) => {
//                 console.log(error);
//             });
//     }, [currentPage]);
//
//     const handleGenreChange = (event) => {
//         setSelectedGenre(event.target.value);
//         axios
//             .get(
//                 `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${event.target.value}`
//             )
//             .then((response) => {
//                 setMovies(response.data.results);
//                 setTotalPages(response.data.total_pages);
//             })
//             .catch((error) => {
//                 console.log(error);
//             });
//     };
//
//     const handlePreviousClick = () => {
//         setCurrentPage(currentPage - 1);
//     };
//
//     const handleNextClick = () => {
//         setCurrentPage(currentPage + 1);
//     };
//
//     return (
//         <div>
//             <h1>Movie Filter</h1>
//             <label htmlFor="genre">Select a genre:</label>
//             <select id="genre" onChange={handleGenreChange}>
//                 <option value="">All Genres</option>
//                 {genres.map((genre) => (
//                     <option key={genre.id} value={genre.id}>
//                         {genre.name}
//                     </option>
//                 ))}
//             </select>
//             <ul>
//                 {movies.map((movie) => (
//                     <li key={movie.id}>{movie.title}</li>
//                 ))}
//             </ul>
//             <div>
//                 <button onClick={handlePreviousClick} disabled={currentPage === 1}>
//                     Previous
//                 </button>
//                 <span>{currentPage}</span>
//                 <button onClick={handleNextClick} disabled={currentPage === totalPages}>
//                     Next
//                 </button>
//             </div>
//         </div>
//     );
// }
//
// export {Genre} ;



// getAll: (with_genres = '') => axiosService.get(`${urls.movie}?with_genres=${with_genres}`),






