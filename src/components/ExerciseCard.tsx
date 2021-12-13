import React from 'react'
import { Exercise } from '../types/exercise'
import { Grid, Typography } from '@mui/material'
import { HeaderComponent } from '../styledComponents/HeaderComponent'

const ExerciseCard = (props: Exercise) => {
  return (
    <Grid
      container
      alignItems={'center'}
      justifyContent={'start'}
      gap={'8px'}
      flexDirection={'row'}
      bgcolor={props.completed ? '#b1fdc8' : 'transparent'}
    >
      <img src={props.photo} width={64} height={64} alt={'exercise'} />
      <Grid
        container
        flexDirection={'column'}
        alignItems={'flex-start'}
        gap={'5px'}
        width={'auto'}
      >
        <HeaderComponent
          fontMedia={'18px'}
          fontWeight={'600'}
          fontSize={'20px'}
          fontFamily={'Source Sans Pro'}
        >
          {props.title}
        </HeaderComponent>
        <Typography
          variant={'h5'}
          fontSize={'14px'}
          fontFamily={'Source Sans Pro'}
          fontWeight={'400'}
        >
          {props.duration} sec
        </Typography>
      </Grid>
    </Grid>
  )
}

export default ExerciseCard
