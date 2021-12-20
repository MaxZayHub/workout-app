import React, { useEffect, useState } from 'react'
import { Grid } from '@mui/material'
import { stores } from '../../store/store'
import { Styles } from './WorkoutCompletedPage.styles'
import { TextColor } from '../../common/TextColor'

const WorkoutCompletedPage = () => {
  const [time, setTime] = useState<number>()

  useEffect(() => {
    stores.exerciseSession.stopTimer()
    setTime(Math.floor(stores.exerciseSession.getWorkOutTime() / 60))
    stores.exerciseSession.clearTimer()
  }, [])

  return (
    <Grid
      container
      width={'100%'}
      minHeight={'100vh'}
      alignItems={'center'}
      justifyContent={'start'}
      flexDirection={'column'}
    >
      <Grid
        container
        width={'55%'}
        alignItems={'center'}
        justifyContent={'start'}
        flexDirection={'column'}
        marginTop={'124px'}
      >
        <Grid item>
          <Styles.CheckIconStyled color={'success'} />
        </Grid>
        <Grid item>
          <TextColor
            variant={'h2'}
            fontSize={'40px'}
            fontWeight={'600'}
            fontFamily={'Source Sans Pro'}
          >
            Workout completed!
          </TextColor>
        </Grid>
        <Grid item>
          <TextColor
            variant={'h5'}
            fontSize={'20px'}
            fontFamily={'Source Sans Pro'}
            fontWeight={'400'}
          >
            Nice job. You’re done. Here’s the workout summary.
          </TextColor>
        </Grid>
        <Grid item marginTop={'32px'}>
          <TextColor
            variant={'h5'}
            fontSize={'14px'}
            fontFamily={'Source Sans Pro'}
          >
            Minutes
          </TextColor>
        </Grid>
        <Grid item marginTop={'4px'}>
          <TextColor
            variant={'h4'}
            fontSize={'40px'}
            fontWeight={'600'}
            fontFamily={'Source Sans Pro'}
          >
            {time}
          </TextColor>
        </Grid>
        <Grid item width={'100%'} marginTop={'40px'}>
          <Styles.SaveContinueButton>Save & Continue</Styles.SaveContinueButton>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default WorkoutCompletedPage
