import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {tvServices} from "../../services";

let initialState = {
  tv: [],
  page:1,
  genres:[],
  error: null,
  loading: false
};

let getAll = createAsyncThunk(
    'tvSlice/getAll',
    async (_, {rejectWithValue}) => {
      try {
        const {data} = await tvServices.getAll();
        return data
      } catch (e) {
        return rejectWithValue(e.response.data)
      }
    }
);

const tvSlice = createSlice({
  name: 'tvSlice',
  initialState,
  reducers: {},
  extraReducers: builder =>
      builder
          .addCase(getAll.fulfilled, (state,action) => {
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
});

const {reducer: tvReducer} = tvSlice;

const tvActions = {getAll}

export {
  tvReducer,
  tvActions
}