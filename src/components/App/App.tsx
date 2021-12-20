import React, { createContext, useState } from 'react'
import AppRouter from '../AppRouter/AppRouter'
import { BrowserRouter } from 'react-router-dom'
import { StyledApp } from './App.styles'
import { ThemeProvider } from 'styled-components'
import { dark, light } from '../../utils/theme'

interface ThemeContextInterface {
  darkMode: boolean;
  setDarkMode: (checked: boolean) => void;
}

export const ThemeContext = createContext<ThemeContextInterface | null>(null)

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false)

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <ThemeProvider theme={darkMode ? dark : light}>
        <BrowserRouter>
          <StyledApp>
            <AppRouter />
          </StyledApp>
        </BrowserRouter>
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default App
