import { configureStore } from "@reduxjs/toolkit";
import MovieReducer from "../features/movies/MovieSlice"


export const store =  configureStore({
    reducer : {
        movies : MovieReducer
    }
});