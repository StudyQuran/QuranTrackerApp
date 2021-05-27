import React from 'react'
import Routes from './components/routes/Routes'
import { ThemeType } from './util/hooks/models/theme'
import { useTheme } from './util/hooks/use-theme'

const App: React.FC = () => {
   const { type } = useTheme()
   const isDarkMode = type === ThemeType.Dark
   return (
      <div className={`flex overflow-hidden text-normal-inverse ${isDarkMode ? 'theme-dark' : 'theme-light'}`}>
         <Routes />
      </div>
   )
}

export default App
