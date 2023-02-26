import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {actorsService} from "../../services";


const initialState = {
    actors: [],
    errors:null,
    page:1
};

const getAll = createAsyncThunk(
    'actorsSlice/getAll',
    async (page, thunkAPI)=>{
        try {
            const{data} = await actorsService.getAll(page)
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

const actorSlice = createSlice({
    name: 'actors',
    initialState,
    reducers:{
        setPage: (state, action) => {
            state.page = action.payload;
        },
    } ,

    extraReducers:builder => builder
        .addCase(getAll.fulfilled, (state, action)=>{
            const {page, results} = action.payload
            state.actors = results
            state.page = page

        })
        .addCase(getAll.rejected, (state, action)=>{
            state.errors = action.error.message;
        })
})


const {reducer:actorReducer, actions: {setPage}} =actorSlice;

const actorActions ={
    getAll,
    setPage
}

export {
    actorActions,
    actorReducer
}
















