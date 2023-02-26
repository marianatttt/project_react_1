import React from 'react';
import {useParams} from "react-router-dom";

import {MovieInfo} from "../../components";

const MovieInfoPage = () => {
    const {movieId}=useParams()

    return (
        <div>
            <MovieInfo movieId={movieId}/>
        </div>
    );
};

export { MovieInfoPage}