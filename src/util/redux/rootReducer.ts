import { combineReducers } from '@reduxjs/toolkit'
import { authSlice } from './auth'

export const reducer = combineReducers({
   auth: authSlice.reducer
})
