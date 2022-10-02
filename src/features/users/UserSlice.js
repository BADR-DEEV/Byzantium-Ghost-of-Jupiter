import axios from "axios";
import userService from "./UserService";
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'




const initialState = {
  users: [],
  Error: false,
  Success: false,
  Loading: false,
  message: '',
}



export const getUsers = createAsyncThunk(
  'users/getAll',
  async (_, thunkAPI) => {

    try {
      const getToken = () => localStorage.getItem("user")
        ? JSON.parse(localStorage.getItem("user"))
        : null;
      // console.log(getToken())

      return await userService.getUsers(getToken())
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



export const UserSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder

      .addCase(getUsers.pending, (state) => {
        state.Loading = true
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.Loading = false
        state.Success = true
        state.users = action.payload
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.Loading = false
        state.Error = true
        state.message = action.payload

      })
  },
})

export const { reset } = UserSlice.actions
export default UserSlice.reducer