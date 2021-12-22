import React, { useEffect } from 'react'
import { observer } from 'mobx-react'
import { Button } from '@mui/material'
import mainImage from '../../assets/startImage.png'
import MainTitle from '../MainTitle/MainTitle'
import QuestionList from '../QuestionsList/QuestionList'
import { nanoid } from 'nanoid'
import { WorkoutButton } from '../../common/StartWorkoutButton'
import { useHistory } from 'react-router'
import { Styles } from './MainPage.styles'
import { stores } from '../../store/store'

const MainPage = observer(() => {
  useEffect(() => {
    if (stores.exercises.getAllExercise().length === 0) {
      stores.exercises.fetchExercises()
    }
  }, [])

  const history = useHistory()

  const startWorkoutClickButton = () => {
    stores.exerciseSession.startTimer()
    history.push(`/exercise/:${stores.exercises.getCurrentElement().id}`)
  }

  return (
    <Styles.PageWrapper container>
      <Styles.FlexWrapper>
        <Styles.ArrowWrapper item>
          <Button size={'small'}>
            <Styles.ArrowBackIconStyled />
          </Button>
        </Styles.ArrowWrapper>
        <Styles.ImageWrapper item>
          <Styles.MainImage src={mainImage} alt={'main'} />
        </Styles.ImageWrapper>
      </Styles.FlexWrapper>
      <Styles.ContentWrapper>
        <Styles.TitleWrapper item>
          <MainTitle />
        </Styles.TitleWrapper>
        {!stores.exercises.isEmpty() ? (
          stores.exercises
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
          {stores.exerciseSession.getCurrentExerciseSession().paused
            ? 'Resume'
            : 'Start Workout'}
        </WorkoutButton>
      </Styles.ContentWrapper>
    </Styles.PageWrapper>
  )
})

export default MainPage
