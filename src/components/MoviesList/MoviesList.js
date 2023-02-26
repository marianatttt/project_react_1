import { useSearchParams } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import {movieActions} from "../../redux";


const MoviesList = () => {

    const { movies, page } = useSelector((state) => state.movies);
    const dispatch = useDispatch();
    const [searchParams, setSearchParams] = useSearchParams({ page });

    useEffect(() => {
        dispatch(movieActions.getAll(page));
        setSearchParams({ page });
    }, [dispatch, page, setSearchParams]);


    return (
        <div className="container_movie-list">
            <div className="container_button_next_back">
                <button onClick={()=>{dispatch(movieActions.setPage(page - 1))}} disabled={page === 1}>
                    Back
                </button>
                <div>{page}</div>
                <button onClick={() =>{dispatch(movieActions.setPage(page + 1))}}>
                    Next
                </button>
            </div>
            <div className="movie-list">
                {movies?.map((movie) => (
                    <MoviesListCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
};

export { MoviesList };





