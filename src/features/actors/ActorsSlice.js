import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import actorsService from './ActorsService'

const initialState = {
  actors: [],
  anError: false,
  Successed: false,
  Loader: false,
  MessageRecived: '',
}


export const getActors = createAsyncThunk(
    'actors/getAll',
    async (_, thunkAPI) => {
      try {
        // const token = thunkAPI.getState().auth.user.token
        return await actorsService.getActors()
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




  export const ActorSlice = createSlice({
    name: 'actors',
    initialState,
    reducers: {
      reset: (state) => initialState,
    },
    extraReducers: (builder) => {
      builder
 
        .addCase(getActors.pending, (state) => {
          state.Loader = true
        })
        .addCase(getActors.fulfilled, (state, action) => {
          state.Loader = false
          state.Successed = true
          state.actors   = action.payload
        })
        .addCase(getActors.rejected, (state, action) => {
          state.Loader = false
          state.anError = true
          state.MessageRecived = action.payload
         
        })
    },
  })
  
  export const { reset } = ActorSlice.actions
  export default ActorSlice.reducer