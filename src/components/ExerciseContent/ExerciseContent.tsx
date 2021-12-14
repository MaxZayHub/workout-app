import React, { useState } from 'react'
import { FlexWrapper } from '../../common/FlexWrapper'
import { Button, Grid, Typography } from '@mui/material'
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import { TimerNumber } from '../../common/TimerNumber'
import { isRemainingTimeLessThanTen } from '../../utils/isRemainingTimeLessThanTen'
import SkipNextIcon from '@mui/icons-material/SkipNext'
// import { VideoStyled } from '../../common/VideoStyled'
import { useHistory } from 'react-router'
import exercises from '../../store/exercises'
import PauseIcon from '@mui/icons-material/Pause'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import { HeaderComponent } from '../../common/HeaderComponent'
import { ExerciseContentPropsInterface } from './ExerciseContent.interface'
import { Style } from './ExerciseContent.styles'
import { VideoStyled } from '../../common/VideoStyled'

const ExerciseContent = (props: ExerciseContentPropsInterface) => {
  const history = useHistory()
  const [pause, setPause] = useState<boolean>(
    exercises.getCurrentExerciseSession().paused
  )
  let duration: number | undefined = 0
  const currentExerciseSession = exercises.getCurrentExerciseSession()

  const changeNextExerciseHandler = () => {
    if (exercises.getCurrentIndex() + 1 < exercises.getAllExercise().length) {
      exercises.setStatusForCurrentElement(true)
      exercises.nextCurrentIndex()
      history.push(`/exercise/:${exercises.getCurrentElement().id}`)
      props.setId(exercises.getCurrentElement().id)
    } else {
      history.push('/complete')
    }
  }

  const clickPauseButtonHandler = () => {
    if (props.currentExercise) {
      exercises.setCurrentExerciseSession(props.currentExercise.duration, false)
    }
    setPause(!pause)
  }

  const changePrevExerciseHandler = () => {
    if (exercises.getCurrentIndex() !== 0) {
      if (
        exercises.getCurrentIndex() + 1 < exercises.getAllExercise().length &&
        duration
      ) {
        exercises.prevCurrentIndex()
        history.push(`/exercise/:${exercises.getCurrentElement().id}`)
        exercises.setCurrentExerciseSession(duration, false)
        props.setId(exercises.getCurrentElement().id)
      } else {
        history.push('/complete')
      }
    }
  }

  const leaveWorkoutClickButtonHandler = () => {
    if (duration) {
      exercises.setCurrentExerciseSession(duration, true)
    }
    exercises.stopTimer()
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
    <Grid
      container
      onKeyUp={onSpaceClickHandler}
      tabIndex={0}
      width={'100%'}
      minHeight={'100vh'}
      justifyContent={'start'}
      alignItems={'center'}
      flexDirection={'column'}
      gap={'32px'}
    >
      {props.currentExercise && (
        <FlexWrapper>
          <HeaderComponent
            fontMedia={'20px'}
            fontWeight={'600'}
            fontSize={'24px'}
            fontFamily={'Source Sans Pro'}
          >
            Get Ready
          </HeaderComponent>
          <Grid container justifyContent={'space-between'}>
            <Grid
              container
              width={'100%'}
              justifyContent={'space-between'}
              alignItems={'center'}
            >
              <Button
                onClick={changePrevExerciseHandler}
                variant={'outlined'}
                color="secondary"
                style={{ border: '2px solid' }}
              >
                <SkipPreviousIcon />
              </Button>
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
              <Button
                onClick={changeNextExerciseHandler}
                variant={'outlined'}
                color="secondary"
                style={{ border: '2px solid' }}
              >
                <SkipNextIcon />
              </Button>
            </Grid>
          </Grid>
          <Grid item width={'100%'} position={'relative'} borderRadius={'10px'}>
            <VideoStyled
              autoPlay={true}
              muted={true}
              loop={true}
              style={{ borderRadius: '10px' }}
            >
              <source src={props.currentExercise?.video} />
            </VideoStyled>
            {pause && (
              <Style.PausedBlock>
                <Typography
                  variant={'h3'}
                  fontFamily={'Source Sans Pro'}
                  color={'white'}
                  fontSize={'24px'}
                >
                  Workout paused
                </Typography>
                <Typography
                  variant={'h3'}
                  fontFamily={'Source Sans Pro'}
                  color={'white'}
                  fontSize={'16px'}
                >
                  Press "Play button" or "Space bar" to continue
                </Typography>
                <Style.LeaveWorkoutButton
                  onClick={leaveWorkoutClickButtonHandler}
                >
                  <Typography
                    variant={'h4'}
                    fontFamily={'Source Sans Pro'}
                    fontSize={'24px'}
                  >
                    Leave workout
                  </Typography>
                </Style.LeaveWorkoutButton>
              </Style.PausedBlock>
            )}
          </Grid>
        </FlexWrapper>
      )}
      <Grid
        container
        alignItems={'center'}
        justifyContent={'center'}
        position={'absolute'}
        bottom={'0px'}
        borderTop={'8px solid #eeeeee'}
        width={'100%'}
        height={'80px'}
      >
        <Style.PauseButton onClick={clickPauseButtonHandler}>
          {pause ? (
            <PlayArrowIcon style={{ color: 'white' }} />
          ) : (
            <PauseIcon style={{ color: 'white' }} />
          )}
        </Style.PauseButton>
      </Grid>
    </Grid>
  )
}

export default ExerciseContent
