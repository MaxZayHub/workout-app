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

const StartWorkoutButton = styled.button`
  width: 55%;
  background-color: #aa00ff;
  height: 56px;
  border: none;
  outline: none;
  border-radius: 10px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  font-family: Source Sans Pro, sans-serif;
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.16);
  cursor: pointer;
  position: fixed;
  bottom: 20px;
  z-index: 2;

  @media (max-width: 375px) {
    width: 90%;
    position: fixed;
    bottom: 20px;
    right: auto;
    left: auto;
    -webkit-box-shadow: 0 0 43px 5px rgba(34, 60, 80, 0.9);
    -moz-box-shadow: 0 0 43px 5px rgba(34, 60, 80, 0.9);
    box-shadow: 0 0 43px 5px rgba(34, 60, 80, 0.9);
  }
`

const MainPage = observer(() => {
  useEffect(() => {
    exercises.fetchExercises()
  }, [])

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
        {exercises.getExercises().questions.map((item) => (
          <QuestionList
            title={item.title}
            key={nanoid()}
            muscleGroup={item.muscleGroup}
            exercises={item.exercises}
          />
        ))}
        <StartWorkoutButton>Start Workout</StartWorkoutButton>
      </ContentWrapper>
    </Grid>
  )
})

export default MainPage
