import React, { useEffect } from 'react'
import { observer } from 'mobx-react'
import exercises from '../store/exercises'
import { Button, Grid } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import styled from 'styled-components'
import mainImage from '../assets/startImage.png'
import MainTitle from './MainTitle'
import QuestionList from './QuestionList'
import { nanoid } from 'nanoid'
import { WorkoutButton } from '../styledComponents/StartWorkoutButton'
import { useHistory } from 'react-router'

const MainImage = styled.img`
  width: 100%;
`

const FlexWrapper = styled.div`
  display: flex;
  width: 55%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 56px;
  gap: 24px;

  @media (max-width: 375px) {
    width: 100%;
  }
`

const ContentWrapper = styled.div`
  display: flex;
  width: 55%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  z-index: 1;

  @media (max-width: 375px) {
    width: 90%;
    padding: 16px;
  }
`

const MainPage = observer(() => {
  useEffect(() => {
    if (exercises.getAllExercise().length === 0) {
      exercises.fetchExercises()
    }
  }, [])

  const history = useHistory()

  const startWorkoutClickButton = () => {
    history.push(`/exercise/:${exercises.getCurrentElement().id}`)
  }

  return (
    <Grid
      container
      width={'100%'}
      height={'100%'}
      alignItems={'center'}
      justifyContent={'center'}
      marginBottom={'100px'}
      flexDirection={'column'}
    >
      <FlexWrapper>
        <Grid item alignSelf={'flex-start'}>
          <Button size={'small'}>
            <ArrowBackIcon />
          </Button>
        </Grid>
        <Grid item alignSelf={'flex-start'}>
          <MainImage src={mainImage} alt={'main'} />
        </Grid>
      </FlexWrapper>
      <ContentWrapper>
        <Grid item alignSelf={'flex-start'}>
          <MainTitle />
        </Grid>
        {!exercises.isEmpty() ? exercises.getExercises().questions.map((item) => (
          <QuestionList
            title={item.title}
            key={nanoid()}
            muscleGroup={item.muscleGroup}
            exercises={item.exercises}
          />
        )) : <h2>...Loading...</h2>}
        <WorkoutButton onClick={startWorkoutClickButton}>Start Workout</WorkoutButton>
      </ContentWrapper>
    </Grid>
  )
})

export default MainPage
