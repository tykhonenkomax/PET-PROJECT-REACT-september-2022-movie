import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieServices} from "../../services";


let initialState = {
  movies: [],
  error: null,
  loading: false
};

const getAll = createAsyncThunk(
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

const searchMovie = createAsyncThunk(
    'movieSlice/searchMovie',
    async (movie, {rejectedWithValue}) => {
      try {
        const {data} = await movieServices.searchMovies(movie)
        return data
      } catch (e) {
        return rejectedWithValue(e.response.data)
      }
    }
);

const moviesSlice = createSlice({
  name: 'moviesSlice',
  initialState,
  reducers: {},
  extraReducers: builder =>
      builder
          .addCase(getAll.fulfilled, (state, action) => {
            state.movies = action.payload?.results
            state.loading = false
          })
          .addCase(getAll.rejected, (state, action) => {
            state.error = action.payload
            state.loading = false
          })
          .addCase(getAll.pending, (state, action) => {
            state.loading = true
          })
          .addCase(searchMovie.fulfilled, (state, action) => {
            state.movies = action.payload?.results
            state.loading = false
          })
          .addCase(searchMovie.pending, (state) => {
            state.loading = true
          })
});

const {reducer: moviesReducer} = moviesSlice;

const moviesActions = {
  getAll,
  searchMovie
}

export {
  moviesReducer,
  moviesActions
}