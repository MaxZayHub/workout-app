import {makeAutoObservable, toJS} from "mobx";
import {Question} from "../types/question";
import { Exercise } from '../types/exercise'

interface Data {
  name: string,
  slug: string,
  questions: Question[]
}

class Exercises {
  private currentIndex = 0
  private allExercises : Exercise[] = []
  private exercises: Data = {name: '', slug: '', questions: []}
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

  fetchExercises() {
    fetch('https://rnd.kilohealthservices.com/api/quizzes/workouts?api_token=4bfcebd0-0216-4572-bdb7-939e9600b9b2')
      .then(res => res.json())
      .then(json => {
        this.exercises = json.data as Data
        this.calculateId()
      })
  }

  getExercises () {
    return toJS(this.exercises)
  }

  isEmpty() {
    return this.exercises.questions.length === 0
  }

  getMaxWorkoutTime() {
    return Math.floor(this.allExercises.reduce((sum, elem) => sum += elem.duration + 5 , 0) / 60)
  }

  private calculateId() {
    this.allExercises = this.exercises.questions.reduce((acc: Exercise[], item) => acc.concat(item.exercises.map((elem) => Object.assign(elem, {completed: false}))), [])
  }

  prevCurrentIndex() {
    if (this.currentIndex === 0) {
      return 0
    } else {
      this.currentIndex -= 1
      return  toJS(this.currentIndex)
    }
  }

  nextCurrentIndex() {
    this.currentIndex += 1
    return toJS(this.currentIndex)
  }

  getCurrentElement() {
    return toJS(this.allExercises[this.currentIndex])
  }

  getElementById(id: number) {
    return toJS(this.allExercises.find((item) => item.id === id));
  }

  getAllExercise() {
    return toJS(this.allExercises)
  }

  getCurrentIndex() {
    return this.currentIndex
  }

  setCurrentIndex(number: number) {
    this.currentIndex = number
  }

  setStatusForCurrentElement(status: boolean) {
    this.allExercises[this.currentIndex].completed = status
  }
}

export default new Exercises()