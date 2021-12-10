import React from 'react'
import { Question } from '../types/question'
import { Divider, Grid, Typography } from '@mui/material'
import ExerciseCard from './ExerciseCard'

const QuestionList = (props: Question) => {
  return (
    <Grid
      flexDirection={'column'}
      width={'100%'}
      gap={'8px'}
      container
      alignSelf={'flex-start'}
    >
      <Divider />
      <Typography
        variant={'h3'}
        fontSize={'16px'}
        fontFamily={'Source Sans Pro'}
        fontWeight={'600'}
        textAlign={'left'}
      >
        {props.title}
      </Typography>
      <Grid
        container
        flexDirection={'column'}
        alignSelf={'flex-start'}
        alignItems={'center'}
        width={'100%'}
        gap={'8px'}
      >
        {props.exercises.map((item) => (
          <ExerciseCard
            key={item.id}
            description={item.description}
            duration={item.duration}
            id={item.id}
            photo={item.photo}
            title={item.title}
            video={item.video}
            completed={item.completed}
          />
        ))}
      </Grid>
    </Grid>
  )
}

export default QuestionList
