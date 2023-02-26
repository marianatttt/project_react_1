import {createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import {genreService, movieService} from "../../services";

const initialState = {
    genres: [],
    selectedGenre: '',
    movies: [],
    page:1,
    errors: null
};

 const getAll = createAsyncThunk(
    'genreSlice/getAll',
    async (_, thunkAPI) => {
        try {
            const response = await genreService.getAll();
            return response.data.genres;
        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data.genres)
        }
    }
);

const getAlByGenre = createAsyncThunk(
    'genreSlice/getAlByGenre',
    async ({ with_genres, page }, thunkAPI) => {
        try {
            const response = await movieService.getAllGenre(with_genres, page);
            return response.data;
        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);


const genreSlice = createSlice({
    name: 'genres',
    initialState,
    reducers: {
        selectGenre: (state, action) => {
            state.selectedGenre = action.payload;
            state.page = 1;
        },
        setPage: (state, action) => {
            state.page = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.genres = action.payload;
            })
            .addCase(getAll.rejected, (state, action) => {
                state.errors = action.error.message;
            })
            .addCase(getAlByGenre.fulfilled, (state, action) => {
                state.movies = action.payload.results;

            })

    },
});

const { reducer:genreReducer, actions: {selectGenre, setPage }} = genreSlice;

const genreActions ={
    getAll,
    getAlByGenre,
    selectGenre,
    setPage
}

export {
    genreReducer,
    genreActions
}