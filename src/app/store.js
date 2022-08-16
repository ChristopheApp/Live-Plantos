import { configureStore } from '@reduxjs/toolkit'
//import counterReducer from '../features/counter/counterSlice'
import myApiReducer from './myApiReducer'

export default configureStore({
  reducer: {
    apiData: myApiReducer,
  },

})