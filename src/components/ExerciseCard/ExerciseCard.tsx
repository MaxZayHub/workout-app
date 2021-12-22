import React from 'react'
import { Exercise } from '../../types/exercise'
import { Styles } from './ExerciseCard.styles'

const ExerciseCard = (props: Exercise) => {
  return (
    <Styles.PageWrapper
      container
      bgcolor={props.completed ? '#53f683' : 'transparent'}
    >
      <img src={props.photo} width={64} height={64} alt={'exercise'} />
      <Styles.CardWrapper container>
        <Styles.StyledTitle>{props.title}</Styles.StyledTitle>
        <Styles.DurationTitle variant={'h5'}>
          {props.duration} sec
        </Styles.DurationTitle>
      </Styles.CardWrapper>
    </Styles.PageWrapper>
  )
}

export default ExerciseCard
