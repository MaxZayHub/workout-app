import { Exercise } from '../../types/exercise'

export interface ExerciseContentPropsInterface {
  currentExercise: Exercise | undefined
  setId: (id: number) => void
}