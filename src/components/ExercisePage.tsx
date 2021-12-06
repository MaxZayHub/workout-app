import React, { useEffect } from 'react'
import { Button, Grid, Typography } from '@mui/material'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import { TimerNumber } from '../styledComponents/TimerNumber'
import SkipNextIcon from '@mui/icons-material/SkipNext'
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import { FlexWrapper } from '../styledComponents/FlexWrapper'
import { VideoStyled } from '../styledComponents/VideoStyled'
import { isRemainingTimeLessThanTen } from '../utils/isRemainingTimeLessThanTen'
import exercises from '../store/exercises'

const ExercisePage = () => {
  const timerCompleteHandler = () => {
    console.log('test')
  }

  useEffect(() => {
    exercises.fetchExercises()
  }, [])

  return (
    <Grid container width={'100%'} minHeight={'100vh'} justifyContent={'start'} alignItems={'center'} flexDirection={'column'} gap={'32px'}>
      <FlexWrapper>
        <Typography variant={'h3'} fontSize={'24px'} fontWeight={'600'} fontFamily={'Source Sans Pro'}>Get Ready</Typography>
        <Grid container justifyContent={'space-between'}>
          <Grid container width={'100%'} justifyContent={'space-between'} alignItems={'center'}>
            <Button variant={'outlined'} color="secondary" style={{border: '2px solid'}}>
              <SkipPreviousIcon />
            </Button>
            <CountdownCircleTimer isPlaying duration={10} colors={[['#ff4081', 1]]} onComplete={timerCompleteHandler} size={128} >
              {({remainingTime}) => <TimerNumber>{isRemainingTimeLessThanTen(remainingTime) ? '0'+remainingTime : remainingTime}</TimerNumber> }
            </CountdownCircleTimer>
            <Button variant={'outlined'} color="secondary" style={{border: '2px solid'}}>
              <SkipNextIcon />
            </Button>
          </Grid>
        </Grid>
        <Grid item width={'100%'}>
          <VideoStyled autoPlay={true} muted={true} loop={true}>
            <source src={"https://player.vimeo.com/external/343282249.sd.mp4?s=0dc8bcdcc634dc397de6182301b22cc4e2f79beb&profile_id=165"}/>
          </VideoStyled>
        </Grid>
      </FlexWrapper>
    </Grid>
  )
}

export default ExercisePage