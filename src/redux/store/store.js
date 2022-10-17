import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import {moviesReducer} from "../slice/movieSlice";
import {tvReducer} from "../slice/tvSlice";

let rootReducer = combineReducers({
  movies: moviesReducer,
  tv: tvReducer
});

const setupStore = () => configureStore({
  reducer: rootReducer
})

export {
  setupStore
}