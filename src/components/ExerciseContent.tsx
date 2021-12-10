import React, { useState } from 'react'
import { FlexWrapper } from '../styledComponents/FlexWrapper'
import { Button, Grid, Typography } from '@mui/material'
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import { TimerNumber } from '../styledComponents/TimerNumber'
import { isRemainingTimeLessThanTen } from '../utils/isRemainingTimeLessThanTen'
import SkipNextIcon from '@mui/icons-material/SkipNext'
import { VideoStyled } from '../styledComponents/VideoStyled'
import { Exercise } from '../types/exercise'
import { useHistory } from 'react-router'
import exercises from '../store/exercises'
import PauseIcon from '@mui/icons-material/Pause';
import styled from 'styled-components'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

interface Props {
  currentExercise: Exercise | undefined
  setId: (id: number) => void
}

const PauseButton = styled.button`
  width: 53px;
  height: 53px;
  border-radius: 50%;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: #aa00ff;
`

const PausedBlock = styled.div`
  top: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color:rgba(0,0,0,.6);
  flex-direction: column;
  gap: 8px;
  border-radius: 10px;
  user-select: none;
  
`

const LeaveWorkoutButton = styled.div`
  width: 256px;
  height: 48px;
  outline: none;
  margin-top: 26px;
  background-color: transparent;
  border-radius: 10px;
  color: #eeeeee;
  border: 2px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

const ExerciseContent = (props: Props) => {
  const history = useHistory()
  const [pause, setPause] = useState<boolean>(exercises.getCurrentExerciseSession().paused)
  let duration : number | undefined = 0
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
    setPause(!pause)
  }

  const changePrevExerciseHandler = () => {
    if (exercises.getCurrentIndex() !== 0) {
      if (exercises.getCurrentIndex() + 1 < exercises.getAllExercise().length && duration) {
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

  const renderTime = (remainingTime: number | undefined ) => {
    return  <TimerNumber>{isRemainingTimeLessThanTen(remainingTime) ? '0'+remainingTime : remainingTime}</TimerNumber>
  }

  const onSpaceClickHandler = (event : React.KeyboardEvent<HTMLDivElement>) => {
    if (event.code === 'Space') {
      setPause(!pause)
    }
  }

  return (
    <Grid container onKeyUp={onSpaceClickHandler} tabIndex={0} width={'100%'} minHeight={'100vh'} justifyContent={'start'} alignItems={'center'} flexDirection={'column'} gap={'32px'}>
      {props.currentExercise && <FlexWrapper>
        <Typography variant={'h3'} fontSize={'24px'} fontWeight={'600'} fontFamily={'Source Sans Pro'}>{props.currentExercise?.title}</Typography>
        <Grid container justifyContent={'space-between'}>
          <Grid container width={'100%'} justifyContent={'space-between'} alignItems={'center'}>
            <Button onClick={changePrevExerciseHandler} variant={'outlined'} color="secondary" style={{border: '2px solid'}}>
              <SkipPreviousIcon />
            </Button>
            <CountdownCircleTimer isPlaying={!pause} initialRemainingTime={currentExerciseSession.paused ? currentExerciseSession.duration : props.currentExercise.duration} duration={props.currentExercise.duration} colors={[['#ff4081', 1]]} onComplete={changeNextExerciseHandler} size={128} >
              {({remainingTime}) => {
                duration = remainingTime
                return renderTime(remainingTime)
              }}
            </CountdownCircleTimer>
            <Button onClick={changeNextExerciseHandler}  variant={'outlined'} color="secondary" style={{border: '2px solid'}}>
              <SkipNextIcon />
            </Button>
          </Grid>
        </Grid>
        <Grid item width={'100%'} position={'relative'} borderRadius={'10px'}>
          <VideoStyled autoPlay={true} muted={true} loop={true} style={{borderRadius: '10px'}}>
            <source src={props.currentExercise?.video}/>
          </VideoStyled>
          {pause &&
            <PausedBlock>
              <Typography variant={'h3'} fontFamily={'Source Sans Pro'} color={'white'} fontSize={'24px'}>Workout paused</Typography>
              <Typography variant={'h3'} fontFamily={'Source Sans Pro'} color={'white'} fontSize={'16px'}>Press "Play button" or "Space bar" to continue</Typography>
              <LeaveWorkoutButton onClick={leaveWorkoutClickButtonHandler}><Typography variant={'h4'} fontFamily={'Source Sans Pro'} fontSize={'24px'}>Leave workout</Typography></LeaveWorkoutButton>
            </PausedBlock>}
        </Grid>
      </FlexWrapper>}
      <Grid container alignItems={'center'} justifyContent={'center'} position={'absolute'} bottom={'0px'} borderTop={'8px solid #eeeeee'} width={'100%'} height={'80px'}>
          <PauseButton onClick={clickPauseButtonHandler}>
            {pause ? <PlayArrowIcon style={{color: 'white'}} /> :  <PauseIcon style={{color: 'white'}}/>}
          </PauseButton>
      </Grid>
    </Grid>
  )
}

export default ExerciseContent