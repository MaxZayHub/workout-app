import React from 'react'
import { Grid, Typography } from '@mui/material'
import exercises from '../../store/exercises'
import { HeaderComponent } from '../../common/HeaderComponent'

const MainTitle = () => {
  return (
    <Grid
      container
      width={'100%'}
      flexDirection={'column'}
      justifyContent={'space-around'}
      gap={'4px'}
    >
      <Typography
        alignSelf={'flex-start'}
        fontFamily={'Source Sans Pro'}
        fontWeight={'400'}
        variant={'h5'}
        fontSize={'14px'}
      >
        Day1
      </Typography>
      <HeaderComponent
        alignSelf={'flex-start'}
        fontMedia={'20px'}
        fontWeight={'600'}
        fontSize={'24px'}
        fontFamily={'Source Sans Pro'}
      >
        Morning Flexibility Routine
      </HeaderComponent>
      <Typography
        alignSelf={'flex-start'}
        fontFamily={'Source Sans Pro'}
        fontWeight={'400'}
        variant={'h5'}
        fontSize={'14px'}
      >
        Easy &#183; {exercises.getMaxWorkoutTime()} &#183; no equipment
      </Typography>
    </Grid>
  )
}

export default MainTitle
