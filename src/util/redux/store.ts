import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
//import logger from 'redux-logger'
import { reducer } from './rootReducer'

const middleware = [...getDefaultMiddleware()]
export default configureStore({
   reducer,
   middleware
})
