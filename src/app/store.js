import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "../features/auth/AuthSlice"
import MovieReducer from "../features/movies/MoviesSlice"
import ActorReducer from "../features/actors/ActorsSlice"
import UserReducer from "../features/users/UserSlice"
import GenreReducer from "../features/genres/GenresSlice"


export const store =  configureStore({
    reducer : {
        auth : AuthReducer,
        movies : MovieReducer,
        actors : ActorReducer,
        users : UserReducer,
        genres : GenreReducer
       
    }
});