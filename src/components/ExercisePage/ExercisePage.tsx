import React, { useEffect, useState } from 'react'
import ExerciseContent from '../ExerciseContent/ExerciseContent'
import ExerciseGetReadyPage from '../ExerciseGetReadyPage/ExerciseGetReadyPage'
import { useParams } from 'react-router'
import { stores } from '../../store/store'

const ExercisePage = () => {
  const [warmupTimerIsOver, setWarmupTimerIsOver] = useState<boolean>(false)
  const { id } = useParams<{ id: string }>()
  const [currentId, setCurrentId] = useState<number>(parseInt(id.slice(1), 10))
  const [currentExercise, setCurrentExercise] = useState(
    stores.exercises.getElementById(currentId)
  )

  useEffect(() => {
    setWarmupTimerIsOver(false)
    setCurrentExercise(stores.exercises.getElementById(currentId))
  }, [currentId])

  useEffect(() => {
    if (stores.exerciseSession.getCurrentExerciseSession().paused) {
      setWarmupTimerIsOver(true)
    }
  }, [])

  return (
    <>
      {warmupTimerIsOver ? (
        <ExerciseContent
          setId={setCurrentId}
          currentExercise={currentExercise}
        />
      ) : (
        <ExerciseGetReadyPage
          currentExercise={currentExercise}
          setWarmupTimerIsOver={setWarmupTimerIsOver}
        />
      )}
    </>
  )
}

export default ExercisePage
