import React from 'react';
import './App.css';
import MainPage from "./components/MainPage";
import ExerciseGetReadyPage from "./components/ExerciseGetReadyPage";
import styled from 'styled-components'
import ExercisePage from './components/ExercisePage'
import WorkoutCompletedPage from './components/WorkoutCompletedPage'

const StyledApp = styled.div`
  width: 100%;
  min-height: 100vh;
`

function App() {
  return (
    <StyledApp>
      <WorkoutCompletedPage/>
    </StyledApp>
  );
}

export default App;
