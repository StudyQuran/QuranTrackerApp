import React from 'react'
import { Switch, Redirect, Route } from 'react-router-dom'
import Error from '../Error'
import { Dashboard, Classes, Students } from '../private/teacher'
import SideNav from '../SideNav'

const PrivateRoutes: React.FC = () => {
   return (
      <>
         <SideNav />
         <div className='flex flex-grow'>
            <Switch>
               <Redirect exact from='/' to='/dash' />
               <Route path='/dash'>
                  <Dashboard />
               </Route>
               <Route path='/classes'>
                  <Classes />
               </Route>
               <Route path='/students'>
                  <Students />
               </Route>
               {/* <Route path='/chat'>
                    <Chat />
                </Route> */}
               <Route path='/404'>
                  <Error />
               </Route>
               <Redirect to='/404' />
            </Switch>
         </div>
      </>
   )
}

export default PrivateRoutes
