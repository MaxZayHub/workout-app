import React from 'react'
import './App.css';
import styled from 'styled-components'
import AppRouter from './components/AppRouter'
import { BrowserRouter } from 'react-router-dom'

const StyledApp = styled.div`
  width: 100%;
  min-height: 100vh;
`

function App() {
  return (
    <BrowserRouter>
      <StyledApp>
        <AppRouter />
      </StyledApp>
    </BrowserRouter>
  );
}

export default App;
