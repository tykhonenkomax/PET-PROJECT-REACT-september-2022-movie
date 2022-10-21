import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {tvServices} from "../../services";


let initialState = {
  tv: [],
  genres: [],
  error: null,
  loading: false
};

const getAll = createAsyncThunk(
    'tvSlice/getAll',
    async (page, {rejectWithValue}) => {
      try {
        const {data} = await tvServices.getAll(page);
        return data
      } catch (e) {
        return rejectWithValue(e.response.data)
      }
    }
);

const searchTv = createAsyncThunk(
    'tvSlice/searchTv',
    async (tv,{rejectWithValue})=>{
      try {
      const {data}=await tvServices.searchTv(tv);
      return data
      }catch (e) {
        return rejectWithValue(e.response.data)
      }
    }
)


const tvSlice = createSlice({
  name: 'tvSlice',
  initialState,
  reducers: {},
  extraReducers: builder =>
      builder
          .addCase(getAll.fulfilled, (state, action) => {
            state.tv = action.payload.results
            state.loading = false
          })
          .addCase(getAll.rejected, (state, action) => {
            state.error = action.payload
            state.loading = false
          })
          .addCase(getAll.pending, (state, action) => {
            state.loading = true
          })
          .addCase(searchTv.fulfilled, (state, action) => {
            state.tv = action.payload?.results
          })
          .addCase(searchTv.rejected, (state, action) => {
            state.error = action.payload
            state.loading = false
          })
          .addCase(searchTv.pending, (state, action) => {
            state.loading = true
          })

});

const {reducer: tvReducer} = tvSlice;

const tvActions = {
  getAll,
  searchTv
}

export {
  tvReducer,
  tvActions
}