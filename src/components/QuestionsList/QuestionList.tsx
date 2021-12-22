import React from 'react'
import { Question } from '../../types/question'
import { Divider } from '@mui/material'
import ExerciseCard from '../ExerciseCard/ExerciseCard'
import { Styles } from './QuestionList.styles'

const QuestionList = (props: Question) => {
  return (
    <Styles.PageWrapper container>
      <Divider />
      <Styles.TitleText>{props.title}</Styles.TitleText>
      <Styles.ListWrapper container>
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
      </Styles.ListWrapper>
    </Styles.PageWrapper>
  )
}

export default QuestionList
