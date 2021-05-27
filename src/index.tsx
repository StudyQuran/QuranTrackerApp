import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Rotuer } from 'react-router-dom'

import store from './util/redux/store'
import App from './App'
import reportWebVitals from './reportWebVitals'

import './index.css'
import { ThemeProvider } from './util/hooks/use-theme'

ReactDOM.render(
   <React.StrictMode>
      <Provider store={store}>
         <Rotuer>
            <ThemeProvider>
               <App />
            </ThemeProvider>
         </Rotuer>
      </Provider>
   </React.StrictMode>,
   document.getElementById('root')
)

reportWebVitals()
