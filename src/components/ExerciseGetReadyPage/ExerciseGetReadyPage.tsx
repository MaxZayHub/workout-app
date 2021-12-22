import React from 'react'
import { Grid } from '@mui/material'
import { TimerNumber } from '../../common/TimerNumber'
import SkipNextIcon from '@mui/icons-material/SkipNext'
import { FlexWrapper } from '../../common/FlexWrapper'
import { isRemainingTimeLessThanTen } from '../../utils/isRemainingTimeLessThanTen'
import { ExerciseGetReadyPropsInterface } from './ExerciseGetReadyPage.interface'
import { Styles } from './ExerciseGetReadyPage.styles'

const ExerciseGetReadyPage = (props: ExerciseGetReadyPropsInterface) => {
  const skipWarmupHandler = () => {
    props.setWarmupTimerIsOver(true)
  }

  return (
    <Styles.PageWrapper container>
      <FlexWrapper>
        <Styles.PageTitle>Get Ready</Styles.PageTitle>
        <Grid container justifyContent={'end'}>
          <Styles.TimerWrapper>
            <Styles.Timer isPlaying onComplete={skipWarmupHandler}>
              {({ remainingTime }) => (
                <TimerNumber>
                  {isRemainingTimeLessThanTen(remainingTime)
                    ? '0' + remainingTime
                    : remainingTime}
                </TimerNumber>
              )}
            </Styles.Timer>
            <Styles.SkipButton onClick={skipWarmupHandler}>
              <SkipNextIcon />
            </Styles.SkipButton>
          </Styles.TimerWrapper>
        </Grid>
        <Styles.VideoWrapper item>
          <Styles.VideoStyled autoPlay={true} muted={true} loop={true}>
            <source src={props.currentExercise?.video} />
          </Styles.VideoStyled>
        </Styles.VideoWrapper>
      </FlexWrapper>
    </Styles.PageWrapper>
  )
}

export default ExerciseGetReadyPage
