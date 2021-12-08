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

const ExerciseContent = (props: Props) => {
  const history = useHistory()
  const [pause, setPause] = useState<boolean>(false)

  const changeNextExerciseHandler = () => {
    if (exercises.getCurrentIndex() + 1 < exercises.getAllExercise().length) {
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
      if (exercises.getCurrentIndex() + 1 < exercises.getAllExercise().length) {
        exercises.prevCurrentIndex()
        history.push(`/exercise/:${exercises.getCurrentElement().id}`)
        props.setId(exercises.getCurrentElement().id)
      } else {
        history.push('/complete')
      }
    }
  }

  return (
    <Grid container width={'100%'} minHeight={'100vh'} justifyContent={'start'} alignItems={'center'} flexDirection={'column'} gap={'32px'}>
      {props.currentExercise && <FlexWrapper>
        <Typography variant={'h3'} fontSize={'24px'} fontWeight={'600'} fontFamily={'Source Sans Pro'}>{props.currentExercise?.title}</Typography>
        <Grid container justifyContent={'space-between'}>
          <Grid container width={'100%'} justifyContent={'space-between'} alignItems={'center'}>
            <Button onClick={changePrevExerciseHandler} variant={'outlined'} color="secondary" style={{border: '2px solid'}}>
              <SkipPreviousIcon />
            </Button>
            <CountdownCircleTimer isPlaying={!pause} duration={props.currentExercise.duration} colors={[['#ff4081', 1]]} onComplete={changeNextExerciseHandler} size={128} >
              {({remainingTime}) => <TimerNumber>{isRemainingTimeLessThanTen(remainingTime) ? '0'+remainingTime : remainingTime}</TimerNumber> }
            </CountdownCircleTimer>
            <Button onClick={changeNextExerciseHandler}  variant={'outlined'} color="secondary" style={{border: '2px solid'}}>
              <SkipNextIcon />
            </Button>
          </Grid>
        </Grid>
        <Grid item width={'100%'} position={'relative'}>
          <VideoStyled autoPlay={true} muted={true} loop={true}>
            <source src={props.currentExercise?.video}/>
          </VideoStyled>
          <h1 style={{position: 'absolute', top: '0px'}} >test</h1>
        </Grid>
      </FlexWrapper>}
      <Grid container onClick={clickPauseButtonHandler} alignItems={'center'} justifyContent={'center'} position={'absolute'} bottom={'0px'} borderTop={'8px solid #eeeeee'} width={'100%'} height={'80px'}>
          <PauseButton>
            {pause ? <PlayArrowIcon style={{color: 'white'}} /> :  <PauseIcon style={{color: 'white'}}/>}
          </PauseButton>
      </Grid>
    </Grid>
  )
}

export default ExerciseContent