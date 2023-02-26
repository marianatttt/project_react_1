import React from "react";
import {useNavigate} from "react-router-dom";

import {StarsRating} from "../StarsRating/StarsRating";
import {api_img} from "../../configs";

const MoviesListCard = ({movie}) => {
    const {id, title, poster_path, overview, vote_average, genre_ids, backdrop_path, release_date, vote_count} = movie;
    const navigate = useNavigate();


 return (
     <div className="movie-card">
         <img className="movie-poster" src={api_img+poster_path}></img>
         <p>{title}</p>
         <p>{vote_average.toFixed(1)}</p>
         <div className="rating_and_button"><StarsRating rating={vote_average}/>
         <div><button className="button_detail_info" onClick={()=>navigate(id.toString())}>Details</button></div>
         </div>
     </div>

 );
};

export {MoviesListCard};































