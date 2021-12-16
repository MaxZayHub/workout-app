import { Exercise } from '../../types/exercise'

export interface ExerciseContentPropsInterface {
  currentExercise?: Exercise
  setId: (id: number) => void
}