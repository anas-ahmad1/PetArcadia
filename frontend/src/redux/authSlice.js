import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import authService from './authService'
import axios from 'axios'
// Get User from local storage
const user = JSON.parse(localStorage.getItem('user'))

const initialState = {
    user: user ? user: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

//Register user
export const register = createAsyncThunk('auth/register', async (user, thunkAPI) => {
    try {
        console.log("In slice 1:", user)
        const result = await authService.register(user)
        console.log("In slice 2:", result)
        return result
    } catch (error) {
        const message = (error.response && error.response.data && 
            error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})


//Login user
export const login = createAsyncThunk('auth/login', async (user, thunkAPI) => {
  try {
      //console.log(user)
      const result = await authService.login(user)
      //console.log(result)
      return result
  } catch (error) {
      const message = (error.response && error.response.data && 
          error.response.data.message) || error.message || error.toString()
      return thunkAPI.rejectWithValue(message)
  }
})


//Logout user
export const logout = createAsyncThunk('auth/logout', async () => {
  await authService.logout()
})



// update User data
export const update = createAsyncThunk("update", async (data, { rejectWithValue }) => {
  console.log("Payload:", data)
    try {
      //console.log("id:" , user._id)
      const my_id = data.id
      const result = await axios.patch(`http://localhost:5000/users/update/${my_id}`, data);
      console.log("result:", result)
      localStorage.setItem('user', JSON.stringify(result.data))
      return result.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false,
            state.isError = false,
            state.isSuccess = false,
            state.message = ''
        }
    },
    extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.user = action.payload
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.user = null
      })
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
      .addCase(logout.fulfilled, (state) => {
        state.user = null
      })
      .addCase(update.fulfilled, (state, action) => {
        // console.log("Name:", action.payload.name)
        console.log("Payyyyyload:", action.payload)
        const user = {...state.user, name : action.payload.name, contact: action.payload.contact, image: action.payload.image, password: action.payload.password}
        // console.log("User:", user)
        state.user = user
        state.isSuccess =  true
      })
      .addCase(update.rejected, (state, action) => {
        console.log("error msg:" , action.payload.message)
        state.isError = true
        state.message = action.payload.response.data.message 
      })
    }
})

export const {reset} = authSlice.actions
export default authSlice.reducer