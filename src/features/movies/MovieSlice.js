import { createSlice ,createAsyncThunk } from "@reduxjs/toolkit";
import { movies } from "../../constants/config";
import movieService from "./MovieService"
import axios from "axios";



const initialState = {
    movies: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
}

export const getMovies = createAsyncThunk(`movies/getMovies` , async (_ , thunkAPI)=> {
    try {
        // return await 
        // const result = await movieService.getMovies()
        // console.log("the data is " + result)

        const res = await axios.get("http://smdb.sadeem-lab.com/api/v1/movies")
    console.log("the data is " + res.data)

        
        return res

      

    } catch(error){
        console.log("the error is " + error)

    }
})
export const MovieSlice = createSlice({
    name : "movies",
    initialState,
    reducers : {

    }
})

export default MovieSlice.reducer