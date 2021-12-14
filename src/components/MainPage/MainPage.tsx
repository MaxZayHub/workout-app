import React, { useEffect } from 'react'
import { observer } from 'mobx-react'
import exercises from '../../store/exercises'
import { Button, Grid } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import mainImage from '../../assets/startImage.png'
import MainTitle from '../MainTitle/MainTitle'
import QuestionList from '../QuestionsList/QuestionList'
import { nanoid } from 'nanoid'
import { WorkoutButton } from '../../common/StartWorkoutButton'
import { useHistory } from 'react-router'
import { Styles } from './MainPage.styles'

const MainPage = observer(() => {
  useEffect(() => {
    if (exercises.getAllExercise().length === 0) {
      exercises.fetchExercises()
    }
  }, [])

  const history = useHistory()

  const startWorkoutClickButton = () => {
    exercises.startTimer()
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
      <Styles.FlexWrapper>
        <Grid item alignSelf={'flex-start'}>
          <Button size={'small'}>
            <ArrowBackIcon />
          </Button>
        </Grid>
        <Grid item alignSelf={'flex-start'}>
          <Styles.MainImage src={mainImage} alt={'main'} />
        </Grid>
      </Styles.FlexWrapper>
      <Styles.ContentWrapper>
        <Grid item alignSelf={'flex-start'}>
          <MainTitle />
        </Grid>
        {!exercises.isEmpty() ? (
          exercises
            .getExercises()
            .questions.map((item) => (
              <QuestionList
                title={item.title}
                key={nanoid()}
                muscleGroup={item.muscleGroup}
                exercises={item.exercises}
              />
            ))
        ) : (
          <h2>...Loading...</h2>
        )}
        <WorkoutButton onClick={startWorkoutClickButton}>
          {exercises.getCurrentExerciseSession().paused
            ? 'Resume'
            : 'Start Workout'}
        </WorkoutButton>
      </Styles.ContentWrapper>
    </Grid>
  )
})

export default MainPage
