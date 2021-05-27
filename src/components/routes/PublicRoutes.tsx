import React from 'react'
import { Switch, Redirect, Route } from 'react-router-dom'
import Error from '../Error'
import Landing from '../public/landing/Landing'
import { Login, SignUp, ChangePassword, ForgotPassword } from '../public/auth'

const PublicRoutes: React.FC = () => {
   return (
      <Switch>
         <Route path='/' exact>
            <Landing />
         </Route>
         <Route path='/login'>
            <Login />
         </Route>
         <Route path='/signup'>
            <SignUp />
         </Route>
         <Route path='/forgotpassword'>
            <ForgotPassword />
         </Route>
         <Route path='/changepassword'>
            <ChangePassword />
         </Route>
         <Route path='/404'>
            <Error />
         </Route>
         <Redirect to='/404' />
      </Switch>
   )
}

export default PublicRoutes
