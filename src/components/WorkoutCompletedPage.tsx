import React from 'react'
import { Grid, Typography } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check';
import styled from 'styled-components'

const SaveContinueButton = styled.button`
  width: 100%;
  height: 48px;
  outline: none;
  border: none;
  border-radius: 10px;
  background-color: #aa00ff;
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  font-family: Source Sans Pro, sans-serif;
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.16);
  cursor: pointer;
`

const WorkoutCompletedPage = () => {
  return (
    <Grid container width={'100%'} minHeight={'100vh'} alignItems={'center'} justifyContent={'start'} flexDirection={'column'} >
      <Grid container width={'55%'} alignItems={'center'} justifyContent={'start'} flexDirection={'column'} marginTop={'124px'}>
        <Grid item>
          <CheckIcon color={'success'} style={{fontSize: '76px'}} />
        </Grid>
        <Grid item>
          <Typography variant={'h2'} fontSize={'40px'} fontWeight={'600'} fontFamily={'Source Sans Pro'} >Workout completed!</Typography>
        </Grid>
        <Grid item>
          <Typography variant={'h5'} color={'#222222'} fontSize={'20px'} fontFamily={'Source Sans Pro'} fontWeight={'400'}>Nice job. You’re done. Here’s the workout summary.</Typography>
        </Grid>
        <Grid item marginTop={'32px'}>
          <Typography variant={'h5'} fontSize={'14px'} fontFamily={'Source Sans Pro'} color={'#212121'}>Minutes</Typography>
        </Grid>
        <Grid item  marginTop={'4px'}>
          <Typography variant={'h4'} fontSize={'40px'} color={'#212121'} fontWeight={'600'} fontFamily={'Source Sans Pro'} >25</Typography>
        </Grid>
        <Grid item width={'100%'} marginTop={'40px'}>
          <SaveContinueButton>Save & Continue</SaveContinueButton>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default WorkoutCompletedPage