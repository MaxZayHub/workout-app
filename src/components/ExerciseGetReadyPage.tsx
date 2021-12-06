import React, { useEffect } from 'react'
import { Button, Grid, Typography } from '@mui/material'
import {CountdownCircleTimer} from "react-countdown-circle-timer";
import { TimerNumber } from '../styledComponents/TimerNumber'
import styled from 'styled-components'
import SkipNextIcon from '@mui/icons-material/SkipNext';
import exercises from '../store/exercises'

const FlexWrapper = styled.div`
  display: flex;
  max-width: 800px;
  width: 55%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 72px;
  gap: 24px;

  @media (max-width: 375px) {
    width: 100%;
  }
`

const VideoStyled = styled.video`
  width: 100%;
`


const ExerciseGetReadyPage = () => {
  useEffect(() => {
    exercises.fetchExercises()
  }, [])

  const timerCompleteHandler = () => {
    console.log('test')
  }

  const isRemainingTimeLessThanTen = (number : number | undefined) => {
    if (number) {
      return number < 10
    }
    return false
  }


  return (
    <Grid container width={'100%'} minHeight={'100vh'} justifyContent={'start'} alignItems={'center'} flexDirection={'column'} gap={'32px'}>
      <FlexWrapper>
        <Typography variant={'h3'} fontSize={'24px'} fontWeight={'600'} fontFamily={'Source Sans Pro'}>Get Ready</Typography>
        <Grid container justifyContent={'end'}>
          <Grid container width={'48%'} justifyContent={'space-between'} alignItems={'center'} marginRight={'82px'}>
            <CountdownCircleTimer isPlaying duration={10} colors={[['#1de9b6', 1]]} onComplete={timerCompleteHandler} size={128} >
              {({remainingTime}) => <TimerNumber>{isRemainingTimeLessThanTen(remainingTime) ? '0'+remainingTime : remainingTime}</TimerNumber> }
            </CountdownCircleTimer>
            <Button variant={'outlined'} color="secondary" style={{border: '2px solid'}}>
              <SkipNextIcon />
            </Button>
          </Grid>
        </Grid>
        <Grid item width={'100%'}>
          <VideoStyled autoPlay={true} muted={true} loop={true}>
            <source src={'https://player.vimeo.com/external/534438137.sd.mp4?s=fe266dc61cbcc1962c12df954a872dd2e2276488&profile_id=165\'} />*/}'}/>
          </VideoStyled>
        </Grid>
      </FlexWrapper>
    </Grid>
  );
};

export default ExerciseGetReadyPage;