import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import genreService from './GenresService'

const initialState = {
  genres: [],
 
  error: false,
  Success: false,
  Loading: false,
  message: '',
}


export const getGenres = createAsyncThunk(
    'genres/getAll',
    async (_, thunkAPI) => {
      
      try {
        // const token = localStorage.getItem("user")
        // console.log(`the token is ${token}`)
        return await genreService.getGenres()
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


  export const GenreSlice = createSlice({
    name: 'genres',
    initialState,
    reducers: {
      reset: (state) => initialState,
    },
    extraReducers: (builder) => {
      builder
 
        .addCase(getGenres.pending, (state) => {
          state.Loading = true
        })
        .addCase(getGenres.fulfilled, (state, action) => {
          state.Loading = false
          state.Success = true
          state.genres   = action.payload
        })
        .addCase(getGenres.rejected, (state, action) => {
          state.Loading = false
          state.error = true
          state.message = action.payload
         
        })
    },
  })
  
  export const { reset } = GenreSlice.actions
  export default GenreSlice.reducer