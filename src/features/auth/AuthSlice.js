import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from './AuthService'



const user = JSON.parse(localStorage.getItem('user'));
const initialState = {
  user: user ? user : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}
// Login user
export const login = createAsyncThunk('auth/login', async (formData, thunkAPI) => {
  try {
    console.log(formData)

    return await authService.login(formData)


  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString()
    return thunkAPI.rejectWithValue(message)
  }
})




export const logout = createAsyncThunk('auth/logout', () => {
  authService.logout()
})



export const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false
      state.isError = false
      state.isSuccess = false
      state.message = ''


    },


  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.user = action.payload
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.user = null
      })

  }
})
export const { reset } = AuthSlice.actions
export default AuthSlice.reducer