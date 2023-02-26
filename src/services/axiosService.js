import axios from "axios";

import {baseURL} from "../configs";

const axiosService =axios.create({baseURL});
axiosService.interceptors.request.use((config)=>{
    config.headers.Authorization = `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlY2FjMjgwMDVjOGFkN2I3MmQ0YjQxNDdkM2FkN2Y3NyIsInN1YiI6IjYzZWZiNGEyY2RkYmJjMDBiMmFkOGEzNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pHY2eLajvskChviOIDid2E0plqBCmv6sKB1T1nTNWFM`
    return config
})

export {
    axiosService
}


