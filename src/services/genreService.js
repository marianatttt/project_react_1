import {axiosService} from "./axiosService";
import {urls} from "../configs";

const genreService ={
    getAll:()=>axiosService.get(urls.genre)
}

export {
    genreService
}