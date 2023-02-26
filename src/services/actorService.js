import {axiosService} from "./axiosService";
import {urls} from "../configs";

const actorsService  = {
    getAll:(page)=>axiosService.get(`${urls.actors}?page=${page}`)
}

export {
    actorsService
}