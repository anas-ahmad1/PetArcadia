import {configureStore} from '@reduxjs/toolkit'
import petReducer from './petSlice'
import blogReducer from './blogSlice'

const store = configureStore({
    reducer: {
      pets: petReducer,
      blogs: blogReducer
    }
})
export default store;
