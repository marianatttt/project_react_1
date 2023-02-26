import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieService} from "../../services";


const initialState = {
    movies: [],
    errors:null,
    page:1,
    selectedMovie: null,
    searchMovie: []
};


const getAll = createAsyncThunk(
    'movieSlice/getAll',
    async (page, thunkAPI)=>{
        try {
            const{data} = await movieService.getAll(page)
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);


const getById = createAsyncThunk(
    'movieSlice/getById',
    async ({id}, {rejectWithValue,dispatch,getState,})=>{
        try {
            const{data} = await movieService.getById(id)
            const state = getState()
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const search = createAsyncThunk(
    "movieSlice/search",
    async (query, { rejectWithValue }) => {
        try {
            const { data } = await movieService.searchMovies(query);
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
);


const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers:{
        setPage: (state, action) => {
            state.page = action.payload;
        },
        selectMovie: (state, action) => {
            state.selectedMovie = action.payload;
        },
    } ,

    extraReducers:builder => builder
        .addCase(getAll.fulfilled, (state, action)=>{
            const {page, results} = action.payload
            state.movies = results
            state.page = page

        })
        .addCase(getAll.rejected, (state, action)=>{
            state.errors = action.error.message;
        })
        .addCase(getById.fulfilled, (state, action)=>{
            state.selectedMovie=action.payload
        })
        .addCase(getById.rejected, (state, action)=>{
            state.errors = action.error.message;
        })
        .addCase(search.fulfilled, (state, action) => {
            state.searchMovie = action.payload.results;
        })
        .addCase(search.rejected, (state, action) => {
            state.errors = action.error.message;
        }),
})



const {reducer:movieReducer, actions: {setPage, selectMovie}} =movieSlice;

const movieActions ={
    getAll,
    setPage,
    getById,
    selectMovie,
    search
}

export {
    movieActions,
    movieReducer
}
















