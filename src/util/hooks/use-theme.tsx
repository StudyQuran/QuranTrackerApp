import React, { createContext, useContext, useState, useEffect } from 'react'
import useLocalStorage from '../hooks/use-local-storage'
import { ThemeContextData, ThemeType } from './models/theme'

function useThemeData() {
   const [savedThemeData, setSavedThemeData] = useLocalStorage<ThemeContextData>('theme', {
      type: ThemeType.Light
   })
   const [themeData, setThemeData] = useState<ThemeContextData>(savedThemeData)

   useEffect(() => {
      if (themeData != null) setSavedThemeData({ ...themeData })
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [themeData])

   return { themeData, setThemeData }
}

export type Context = ReturnType<typeof useThemeData>
export const ThemeContext = createContext<Context>(undefined!)

interface Props {}

const ThemeProvider: React.FC<Props> = (props) => {
   const value = useThemeData()
   return <ThemeContext.Provider value={value} {...props} />
}

function useThemeContext() {
   return useContext(ThemeContext)
}

function useTheme() {
   const { themeData } = useContext(ThemeContext)
   return themeData
}

export { ThemeProvider, useThemeContext, useTheme }
