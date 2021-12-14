import React from 'react'
import '../../App.css'
import AppRouter from '../AppRouter/AppRouter'
import { BrowserRouter } from 'react-router-dom'
import { StyledApp } from './App.styles'

function App() {
  return (
    <BrowserRouter>
      <StyledApp>
        <AppRouter />
      </StyledApp>
    </BrowserRouter>
  )
}

export default App
