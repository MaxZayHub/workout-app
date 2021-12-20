import React from 'react'
import { Grid } from '@mui/material'
import { HeaderComponent } from '../../common/HeaderComponent'
import { stores } from '../../store/store'
import { TextColor } from '../../common/TextColor'

const MainTitle = () => {
  return (
    <Grid
      container
      width={'100%'}
      flexDirection={'column'}
      justifyContent={'space-around'}
      gap={'4px'}
    >
      <TextColor
        alignSelf={'flex-start'}
        fontFamily={'Source Sans Pro'}
        fontWeight={'400'}
        variant={'h5'}
        fontSize={'14px'}
      >
        Day1
      </TextColor>
      <HeaderComponent
        alignSelf={'flex-start'}
        fontMedia={'20px'}
        fontWeight={'600'}
        fontSize={'24px'}
        fontFamily={'Source Sans Pro'}
      >
        Morning Flexibility Routine
      </HeaderComponent>
      <TextColor
        alignSelf={'flex-start'}
        fontFamily={'Source Sans Pro'}
        fontWeight={'400'}
        variant={'h5'}
        fontSize={'14px'}
      >
        Easy &#183; {stores.exercises.getMaxWorkoutTime()} &#183; no equipment
      </TextColor>
    </Grid>
  )
}

export default MainTitle
