import React from 'react'
import { Button, Grid } from '@mui/material'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import { TimerNumber } from '../../common/TimerNumber'
import SkipNextIcon from '@mui/icons-material/SkipNext'
import { FlexWrapper } from '../../common/FlexWrapper'
import { isRemainingTimeLessThanTen } from '../../utils/isRemainingTimeLessThanTen'
import { HeaderComponent } from '../../common/HeaderComponent'
import { ExerciseGetReadyPropsInterface } from './ExerciseGetReadyPage.interface'
import { Styles } from './ExerciseGetReadyPage.styles'

const ExerciseGetReadyPage = (props: ExerciseGetReadyPropsInterface) => {
  const skipWarmupHandler = () => {
    props.setWarmupTimerIsOver(true)
  }

  return (
    <Grid
      container
      width={'100%'}
      minHeight={'100vh'}
      justifyContent={'start'}
      alignItems={'center'}
      flexDirection={'column'}
      gap={'32px'}
    >
      <FlexWrapper>
        <HeaderComponent
          fontMedia={'20px'}
          fontWeight={'600'}
          fontSize={'24px'}
          fontFamily={'Source Sans Pro'}
        >
          Get Ready
        </HeaderComponent>
        <Grid container justifyContent={'end'}>
          <Styles.TimerWrapper>
            <CountdownCircleTimer
              isPlaying
              duration={5}
              colors={[['#1de9b6', 1]]}
              onComplete={skipWarmupHandler}
              size={128}
            >
              {({ remainingTime }) => (
                <TimerNumber>
                  {isRemainingTimeLessThanTen(remainingTime)
                    ? '0' + remainingTime
                    : remainingTime}
                </TimerNumber>
              )}
            </CountdownCircleTimer>
            <Button
              onClick={skipWarmupHandler}
              variant={'outlined'}
              color="secondary"
              style={{ border: '2px solid' }}
            >
              <SkipNextIcon />
            </Button>
          </Styles.TimerWrapper>
        </Grid>
        <Grid item width={'100%'}>
          <Styles.VideoStyled autoPlay={true} muted={true} loop={true}>
            <source src={props.currentExercise?.video} />
          </Styles.VideoStyled>
        </Grid>
      </FlexWrapper>
    </Grid>
  )
}

export default ExerciseGetReadyPage
