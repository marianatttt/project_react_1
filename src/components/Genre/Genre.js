import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { genreActions } from '../../redux';
import { api_img } from "../../configs";

const Genre = () => {
    const dispatch = useDispatch();
    const [with_genres, setWithGenres] = useState('');
    const { genres, movies, page, selectedGenre } = useSelector((state) => state.genres);

    useEffect(() => {
        dispatch(genreActions.getAll());
    }, [dispatch]);

    useEffect(() => {
        dispatch(
            genreActions.getAlByGenre({ with_genres: selectedGenre, page })
        );
    }, [dispatch, selectedGenre, page]);

    const handleGenreChange = (genreId) => {
        setWithGenres(genreId);
        dispatch(genreActions.selectGenre(genreId));
    };


    return (
        <div>
            <div className="container_button_next_back">
                <button onClick={() => { dispatch(genreActions.setPage(page - 1)) }} disabled={page === 1}>Back</button>
                <span>{page}</span>
                <button onClick={() => { dispatch(genreActions.setPage(page + 1)) }}>Next</button>
            </div>

            <div className="container_choose_genre">
                {genres.map((genre) => (
                    <button className="button_genre" key={genre.id} onClick={() => handleGenreChange(genre.id)}>{genre.name}</button>
                ))}
            </div>


                <div className="movie-list">
                    {movies.map((movie) => (
                        <div className="movie-card" key={movie.id}>
                            {movie.poster_path && (
                                <div><img className="movie-poster"  src={api_img+movie.poster_path}></img></div>)}
                            <p>{movie.title}</p>
                        </div>
                    ))}
                </div>

        </div>
    );
};

export { Genre };
