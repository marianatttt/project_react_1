import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {movieReducer} from "./slices/movieSlice";
import {genreReducer} from "./slices/genreSlice";
import {actorReducer} from "./slices/actorsSlice";

const rootReducer = combineReducers({
    movies: movieReducer,
    genres: genreReducer,
    actors: actorReducer

})

const setupStore = () => configureStore({
    reducer: rootReducer
})

export {
    setupStore
}



