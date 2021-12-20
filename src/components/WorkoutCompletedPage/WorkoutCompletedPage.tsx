import React, { useEffect, useState } from 'react'
import { Grid, Typography } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check'
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
          <CheckIcon color={'success'} style={{ fontSize: '76px' }} />
        </Grid>
        <Grid item>
          <Typography
            variant={'h2'}
            fontSize={'40px'}
            fontWeight={'600'}
            fontFamily={'Source Sans Pro'}
          >
            Workout completed!
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant={'h5'}
            color={'#222222'}
            fontSize={'20px'}
            fontFamily={'Source Sans Pro'}
            fontWeight={'400'}
          >
            Nice job. You’re done. Here’s the workout summary.
          </Typography>
        </Grid>
        <Grid item marginTop={'32px'}>
          <Typography
            variant={'h5'}
            fontSize={'14px'}
            fontFamily={'Source Sans Pro'}
            color={'#212121'}
          >
            Minutes
          </Typography>
        </Grid>
        <Grid item marginTop={'4px'}>
          <Typography
            variant={'h4'}
            fontSize={'40px'}
            color={'#212121'}
            fontWeight={'600'}
            fontFamily={'Source Sans Pro'}
          >
            {time}
          </Typography>
        </Grid>
        <Grid item width={'100%'} marginTop={'40px'}>
          <Styles.SaveContinueButton>Save & Continue</Styles.SaveContinueButton>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default WorkoutCompletedPage
