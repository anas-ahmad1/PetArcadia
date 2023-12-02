import {configureStore} from '@reduxjs/toolkit'
import petReducer from './petSlice'

const store = configureStore({
    reducer: {
      pets: petReducer
    }
})
export default store;
