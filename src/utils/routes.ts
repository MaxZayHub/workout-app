import MainPage from '../components/MainPage/MainPage'
import WorkoutCompletedPage from '../components/WorkoutCompletedPage/WorkoutCompletedPage'
import ExercisePage from '../components/ExercisePage/ExercisePage'

const MAIN_ROUTE = '/main'
const COMPLETE_ROUTE = '/complete'
const EXERCISE_ROUTE = '/exercise/:id'

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
