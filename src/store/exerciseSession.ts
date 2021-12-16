import { makeAutoObservable, toJS } from 'mobx'

class ExerciseSession {
  private currentExerciseSession : {duration: number, paused: boolean } = {duration: 0, paused: false}
  private workoutTime : number = 0
  private timer : NodeJS.Timeout | null = null

  constructor() {
    makeAutoObservable(this)
  }

  startTimer() {
    this.timer = setInterval(() => {
      this.workoutTime += 1
    }, 1000)
  }

  stopTimer() {
    if (this.timer) {
      clearInterval(this.timer)
    }
  }

  clearTimer() {
    if (this.timer) {
      clearInterval(this.timer)
      this.workoutTime = 0
    }
  }

  getWorkOutTime() {
    return this.workoutTime
  }

  getCurrentExerciseSession() {
    return toJS(this.currentExerciseSession)
  }

  setCurrentExerciseSession(duration: number, paused: boolean) {
    this.currentExerciseSession.duration = duration
    this.currentExerciseSession.paused = paused
  }
}

export default ExerciseSession