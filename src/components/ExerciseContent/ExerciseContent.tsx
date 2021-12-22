import React, { useState } from 'react'
import { FlexWrapper } from '../../common/FlexWrapper'
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import { TimerNumber } from '../../common/TimerNumber'
import { isRemainingTimeLessThanTen } from '../../utils/isRemainingTimeLessThanTen'
import SkipNextIcon from '@mui/icons-material/SkipNext'
import { useHistory } from 'react-router'
import { ExerciseContentPropsInterface } from './ExerciseContent.interface'
import { Styles } from './ExerciseContent.styles'
import { VideoStyled } from '../../common/VideoStyled'
import { stores } from '../../store/store'

const ExerciseContent = (props: ExerciseContentPropsInterface) => {
  const history = useHistory()
  const [pause, setPause] = useState<boolean>(
    stores.exerciseSession.getCurrentExerciseSession().paused
  )
  let duration: number | undefined = 0
  const currentExerciseSession =
    stores.exerciseSession.getCurrentExerciseSession()

  const changeNextExerciseHandler = () => {
    if (
      stores.exercises.getCurrentIndex() + 1 <
      stores.exercises.getAllExercise().length
    ) {
      stores.exercises.setStatusForCurrentElement(true)
      stores.exercises.nextCurrentIndex()
      history.push(`/exercise/:${stores.exercises.getCurrentElement().id}`)
      props.setId(stores.exercises.getCurrentElement().id)
    } else {
      history.push('/complete')
    }
  }

  const clickPauseButtonHandler = () => {
    if (props.currentExercise) {
      stores.exerciseSession.setCurrentExerciseSession(
        props.currentExercise.duration,
        false
      )
    }
    setPause(!pause)
  }

  const changePrevExerciseHandler = () => {
    if (stores.exercises.getCurrentIndex() !== 0) {
      if (
        stores.exercises.getCurrentIndex() + 1 <
          stores.exercises.getAllExercise().length &&
        duration
      ) {
        stores.exercises.prevCurrentIndex()
        history.push(`/exercise/:${stores.exercises.getCurrentElement().id}`)
        stores.exerciseSession.setCurrentExerciseSession(duration, false)
        props.setId(stores.exercises.getCurrentElement().id)
      } else {
        history.push('/complete')
      }
    }
  }

  const leaveWorkoutClickButtonHandler = () => {
    if (duration) {
      stores.exerciseSession.setCurrentExerciseSession(duration, true)
    }
    stores.exerciseSession.stopTimer()
    history.push('/main')
  }

  const renderTime = (remainingTime: number | undefined) => {
    return (
      <TimerNumber>
        {isRemainingTimeLessThanTen(remainingTime)
          ? '0' + remainingTime
          : remainingTime}
      </TimerNumber>
    )
  }

  const onSpaceClickHandler = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.code === 'Space') {
      setPause(!pause)
    }
  }

  return (
    <Styles.PageWrapper container onKeyUp={onSpaceClickHandler}>
      {props.currentExercise && (
        <FlexWrapper>
          <Styles.GetReadyTitle>Get Ready</Styles.GetReadyTitle>
          <Styles.ContentWrapper container>
            <Styles.TimerContent container>
              <Styles.ControlButton onClick={changePrevExerciseHandler}>
                <SkipPreviousIcon />
              </Styles.ControlButton>
              <CountdownCircleTimer
                isPlaying={!pause}
                initialRemainingTime={
                  currentExerciseSession.paused
                    ? currentExerciseSession.duration
                    : props.currentExercise.duration
                }
                duration={props.currentExercise.duration}
                colors={[['#ff4081', 1]]}
                onComplete={changeNextExerciseHandler}
                size={128}
              >
                {({ remainingTime }) => {
                  duration = remainingTime
                  return renderTime(remainingTime)
                }}
              </CountdownCircleTimer>
              <Styles.ControlButton onClick={changeNextExerciseHandler}>
                <SkipNextIcon />
              </Styles.ControlButton>
            </Styles.TimerContent>
          </Styles.ContentWrapper>
          <Styles.VideoWrapper item>
            <VideoStyled autoPlay={true} muted={true} loop={true}>
              <source src={props.currentExercise?.video} />
            </VideoStyled>
            {pause && (
              <Styles.PausedBlock>
                <Styles.PausedBlockTitle variant={'h3'}>
                  Workout paused
                </Styles.PausedBlockTitle>
                <Styles.PausedBlockText variant={'h3'}>
                  Press "Play button" or "Space bar" to continue
                </Styles.PausedBlockText>
                <Styles.LeaveWorkoutButton
                  onClick={leaveWorkoutClickButtonHandler}
                >
                  <Styles.LeaveWorkoutButtonText variant={'h4'}>
                    Leave workout
                  </Styles.LeaveWorkoutButtonText>
                </Styles.LeaveWorkoutButton>
              </Styles.PausedBlock>
            )}
          </Styles.VideoWrapper>
        </FlexWrapper>
      )}
      <Styles.PauseWrapper container>
        <Styles.PauseButton onClick={clickPauseButtonHandler}>
          {pause ? <Styles.ButtonPlayIcon /> : <Styles.ButtonPauseIcon />}
        </Styles.PauseButton>
      </Styles.PauseWrapper>
    </Styles.PageWrapper>
  )
}

export default ExerciseContent
