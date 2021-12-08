import { COMPLETE_ROUTE, EXERCISE_ROUTE, MAIN_ROUTE } from './consts'
import MainPage from '../components/MainPage'
import WorkoutCompletedPage from '../components/WorkoutCompletedPage'
import ExercisePage from '../components/ExercisePage'

export const routes = [
  {
    path: MAIN_ROUTE,
    Component: MainPage
  },

  {
    path: COMPLETE_ROUTE,
    Component: WorkoutCompletedPage
  },

  {
    path: EXERCISE_ROUTE,
    Component: ExercisePage
  }
]