import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


import {api_img} from "../../configs";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {movieActions} from "../../redux";

    const Search = () => {
        const [query, setQuery] = useState('');
        const dispatch = useDispatch();
        const { searchMovie } = useSelector((state) => state.movies);

        const handleSearch = (event) => {
        event.preventDefault();
        if (query.trim() !== '') {
            dispatch(movieActions.search(query.trim()));
            setQuery('');
            }
        };


    return (
        <div className="containet_input">
            <form onSubmit={handleSearch}>
               <input type="text" placeholder="Find movie" value={query}
                    onChange={(event) => setQuery(event.target.value)}/>
                    <button className="button_icon" type="submit">
                    <FontAwesomeIcon className="icon_search" icon={faSearch}/></button>
            </form>
            <div className="movie-list">
                {searchMovie.map((movie) => (
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

export {Search};


