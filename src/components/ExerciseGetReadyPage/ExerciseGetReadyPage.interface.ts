import { Exercise } from '../../types/exercise'

export interface ExerciseGetReadyPropsInterface {
  setWarmupTimerIsOver: (warmupTimerIsOver: boolean) => void
  currentExercise: Exercise | undefined
}