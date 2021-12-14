import React from 'react'
import { Question } from '../../types/question'
import { Divider, Grid } from '@mui/material'
import ExerciseCard from '../ExerciseCard/ExerciseCard'
import { HeaderComponent } from '../../common/HeaderComponent'

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
      <HeaderComponent
        fontMedia={'15px'}
        textAlign={'left'}
        fontWeight={'600'}
        fontSize={'16px'}
        fontFamily={'Source Sans Pro'}
      >
        {props.title}
      </HeaderComponent>
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
