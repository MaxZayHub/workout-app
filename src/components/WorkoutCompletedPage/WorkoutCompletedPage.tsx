import React, { useEffect, useState } from 'react'
import { Grid } from '@mui/material'
import { stores } from '../../store/store'
import { Styles } from './WorkoutCompletedPage.styles'

const WorkoutCompletedPage = () => {
  const [time, setTime] = useState<number>()

  useEffect(() => {
    stores.exerciseSession.stopTimer()
    setTime(Math.floor(stores.exerciseSession.getWorkOutTime() / 60))
    stores.exerciseSession.clearTimer()
  }, [])

  return (
    <Styles.PageWrapper container>
      <Styles.ContentWrapper container>
        <Grid item>
          <Styles.CheckIconStyled color={'success'} />
        </Grid>
        <Grid item>
          <Styles.TitleText variant={'h2'}>Workout completed!</Styles.TitleText>
        </Grid>
        <Grid item>
          <Styles.MessageText variant={'h5'}>
            Nice job. You’re done. Here’s the workout summary.
          </Styles.MessageText>
        </Grid>
        <Styles.TimeWrapper item>
          <Styles.Minutes variant={'h5'}>Minutes</Styles.Minutes>
        </Styles.TimeWrapper>
        <Styles.MinutesWrapper item>
          <Styles.MinutesText variant={'h4'}>{time}</Styles.MinutesText>
        </Styles.MinutesWrapper>
        <Styles.ButtonWrapper item>
          <Styles.SaveContinueButton>Save & Continue</Styles.SaveContinueButton>
        </Styles.ButtonWrapper>
      </Styles.ContentWrapper>
    </Styles.PageWrapper>
  )
}

export default WorkoutCompletedPage
