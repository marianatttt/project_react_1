import {axiosService} from "./axiosService";

import {urls} from "../configs";
const movieService = {
    getAll: (page) => axiosService.get(`${urls.movie}?page=${page}`),
    getAllGenre: (with_genres, page) => axiosService.get(`${urls.movie}?with_genres=${with_genres}`, {
        params: { with_genres, page},
    }),
    getById: (id) => axiosService.get(`/movie/${id}`),
    getTrailer:(movie_id) => axiosService.get(`/movie/${movie_id}/videos`),
    searchMovies: (query) => axiosService.get(`/search/movie`, {params:{query}}),
}


export {
    movieService
}


