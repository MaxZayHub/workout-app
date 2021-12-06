import React from 'react';
import './App.css';
import MainPage from "./components/MainPage";
import ExerciseGetReadyPage from "./components/ExerciseGetReadyPage";
import styled from 'styled-components'

const StyledApp = styled.div`
  width: 100%;
  min-height: 100vh;
`

function App() {
  return (
    <StyledApp>
      <ExerciseGetReadyPage />
    </StyledApp>
  );
}

export default App;
