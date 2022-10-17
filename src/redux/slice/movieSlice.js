import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";


import {movieServices} from "../../services";

let initialState = {
  movies: [],
  error: null,
  loading: false
};

let getAll = createAsyncThunk(
    'moviesSlice/getAll',
    async (page, {rejectWithValue}) => {
      try {
        const {data} = await movieServices.getAll(page);
        return data
      } catch (e) {
        return rejectWithValue(e.response.data)
      }
    }
);

const moviesSlice = createSlice({
  name: 'moviesSlice',
  initialState,
  reducers: {},
  extraReducers: builder =>
      builder
          .addCase(getAll.fulfilled, (state,action) => {
            state.movies = action.payload.results
            state.loading = false
          })
          .addCase(getAll.rejected, (state, action) => {
            state.error = action.payload
            state.loading = false
          })
          .addCase(getAll.pending, (state, action) => {
            state.loading = true
          })
});

const {reducer: moviesReducer} = moviesSlice;

const moviesActions = {getAll}

export {
  moviesReducer,
  moviesActions
}