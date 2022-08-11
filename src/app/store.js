import { configureStore } from '@reduxjs/toolkit'
//import counterReducer from '../features/counter/counterSlice'
import localhostReducer from './localhostReducer'
import counterReducer from './productionReducer'

export default configureStore({
  reducer: {
    counter: counterReducer,
    data: localhostReducer,
  },

})