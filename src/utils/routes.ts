import {
  COMPLETE_ROUTE,
  EXERCISE_ROUTE,
  MAIN_ROUTE,
} from '../consts/routeConsts'
import MainPage from '../components/MainPage/MainPage'
import WorkoutCompletedPage from '../components/WorkoutCompletedPage/WorkoutCompletedPage'
import ExercisePage from '../components/ExercisePage/ExercisePage'

export const routes = [
  {
    path: MAIN_ROUTE,
    Component: MainPage,
  },

  {
    path: COMPLETE_ROUTE,
    Component: WorkoutCompletedPage,
  },

  {
    path: EXERCISE_ROUTE,
    Component: ExercisePage,
  },
]
