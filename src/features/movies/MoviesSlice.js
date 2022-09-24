import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import movieService from './MoviesService'

const initialState = {
  movies: [],
  // movie : {},
  Error: false,
  Success: false,
  Loading: false,
  message: '',
}


export const getMovies = createAsyncThunk(
    'movies/getAll',
    async (_, thunkAPI) => {
      
      try {
        // const token = localStorage.getItem("user")
        // console.log(`the token is ${token}`)
        return await movieService.getMovies()
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString()
        return thunkAPI.rejectWithValue(message)
      }
    }
  )



  // export const getMovieById = createAsyncThunk(
  //   'movies/getAll',
  //   async (_, thunkAPI) => {
  //     try {
  //       // const token = thunkAPI.getState().auth.user.token
  //       return await movieService.getMovieById(id)
  //     } catch (error) {
  //       const message =
  //         (error.response &&
  //           error.response.data &&
  //           error.response.data.message) ||
  //         error.message ||
  //         error.toString()
  //       return thunkAPI.rejectWithValue(message)
  //     }
  //   }
  // )


  export const MovieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
      reset: (state) => initialState,
    },
    extraReducers: (builder) => {
      builder
 
        .addCase(getMovies.pending, (state) => {
          state.Loading = true
        })
        .addCase(getMovies.fulfilled, (state, action) => {
          state.Loading = false
          state.Success = true
          state.movies   = action.payload
        })
        .addCase(getMovies.rejected, (state, action) => {
          state.Loading = false
          state.Error = true
          state.message = action.payload
         
        })
    },
  })
  
  export const { reset } = MovieSlice.actions
  export default MovieSlice.reducer