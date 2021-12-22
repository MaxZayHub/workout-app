import React from 'react'
import { stores } from '../../store/store'
import { Styles } from './MainTitle.styles'

const MainTitle = () => {
  return (
    <Styles.PageWrapper container>
      <Styles.SmallText variant={'h5'}>Day1</Styles.SmallText>
      <Styles.TitleText>Morning Flexibility Routine</Styles.TitleText>
      <Styles.SmallText variant={'h5'}>
        Easy &#183; {stores.exercises.getMaxWorkoutTime()} &#183; no equipment
      </Styles.SmallText>
    </Styles.PageWrapper>
  )
}

export default MainTitle
