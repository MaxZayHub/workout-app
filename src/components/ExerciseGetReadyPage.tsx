import React from 'react'
import { Button, Grid, Typography } from '@mui/material'
import {CountdownCircleTimer} from "react-countdown-circle-timer";
import { TimerNumber } from '../styledComponents/TimerNumber'
import styled from 'styled-components'
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { FlexWrapper } from '../styledComponents/FlexWrapper'
import { isRemainingTimeLessThanTen } from '../utils/isRemainingTimeLessThanTen'
import { Exercise } from '../types/exercise'

interface Props {
  setWarmupTimerIsOver: (warmupTimerIsOver: boolean) => void
  currentExercise: Exercise | undefined
}

const VideoStyled = styled.video`
  width: 100%;
`

const TimerWrapper = styled.div`
  width: 48%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 82px;
  
  @media(max-width: 375px) {
    width: 66%;
    margin-right: 0;
  }
`


const ExerciseGetReadyPage = (props: Props) => {
  const skipWarmupHandler = () => {
    props.setWarmupTimerIsOver(true)
  }

  return (
    <Grid container width={'100%'} minHeight={'100vh'} justifyContent={'start'} alignItems={'center'} flexDirection={'column'} gap={'32px'}>
      <FlexWrapper>
        <Typography variant={'h3'} fontSize={'24px'} fontWeight={'600'} fontFamily={'Source Sans Pro'}>Get Ready</Typography>
        <Grid container justifyContent={'end'}>
          <TimerWrapper>
            <CountdownCircleTimer isPlaying duration={5} colors={[['#1de9b6', 1]]} onComplete={skipWarmupHandler} size={128} >
              {({remainingTime}) => <TimerNumber>{isRemainingTimeLessThanTen(remainingTime) ? '0'+remainingTime : remainingTime}</TimerNumber> }
            </CountdownCircleTimer>
            <Button onClick={skipWarmupHandler} variant={'outlined'} color="secondary" style={{border: '2px solid'}}>
              <SkipNextIcon />
            </Button>
          </TimerWrapper>
        </Grid>
        <Grid item width={'100%'}>
          <VideoStyled autoPlay={true} muted={true} loop={true}>
            <source src={props.currentExercise?.video}/>
          </VideoStyled>
        </Grid>
      </FlexWrapper>
    </Grid>
  );
};

export default ExerciseGetReadyPage;