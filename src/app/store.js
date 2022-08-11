import { configureStore } from '@reduxjs/toolkit'
//import counterReducer from '../features/counter/counterSlice'
import myApiReducer from './myApiReducer'
import counterReducer from './productionReducer'

export default configureStore({
  reducer: {
    counter: counterReducer,
    apiData: myApiReducer,
  },

})