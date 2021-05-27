import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ReduxState } from './types'

const authInitialState: ReduxState['auth'] = {
   isAuth: false,
   userData: { Username: '' }
}
// http://199.204.86.206/api/AIM/Authenticate/By/UsernamePassword
export const authSlice = createSlice({
   name: 'auth',
   initialState: authInitialState,
   reducers: {
      login: {
         reducer: (state, { payload }: PayloadAction<ReduxState['auth']>) => {
            return { ...state, isAuth: payload.isAuth, userData: payload.userData }
         },
         prepare: ({ userData }: { userData: ReduxState['auth']['userData'] }) => ({
            payload: {
               isAuth: true,
               userData
            }
         })
      },
      logout: (state) => {
         return {
            ...state,
            isAuth: authInitialState.isAuth,
            userData: authInitialState.userData
         }
      }
   }
})

export const { login: Login, logout: Logout } = authSlice.actions
