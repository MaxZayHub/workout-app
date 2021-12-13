import React, { useEffect, useState } from 'react'
import ExerciseContent from './ExerciseContent'
import ExerciseGetReadyPage from './ExerciseGetReadyPage'
import exercises from '../store/exercises'
import { useParams } from 'react-router'

const ExercisePage = () => {
  const [warmupTimerIsOver, setWarmupTimerIsOver] = useState<boolean>(false)
  const { id } = useParams<{ id: string }>()
  const [currentId, setCurrentId] = useState<number>(parseInt(id.slice(1), 10))
  const [currentExercise, setCurrentExercise] = useState(
    exercises.getElementById(currentId)
  )

  useEffect(() => {
    setWarmupTimerIsOver(false)
    setCurrentExercise(exercises.getElementById(currentId))
  }, [currentId])

  useEffect(() => {
    if (exercises.getCurrentExerciseSession().paused) {
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
