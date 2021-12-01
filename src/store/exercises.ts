import {makeAutoObservable, toJS} from "mobx";
import {Question} from "../types/question";

class Exercises {
  private exercises: Question = {title: '', muscleGroup: [], exercises: []}

  constructor() {
    makeAutoObservable(this)
  }

  fetchExercises() {
    fetch('https://rnd.kilohealthservices.com/api/quizzes/workouts?api_token=4bfcebd0-0216-4572-bdb7-939e9600b9b2')
      .then(res => res.json())
      .then(json => {
        this.exercises = json.data as Question
      })
  }

  getExercises () {
    return toJS(this.exercises)
  }

}

export default new Exercises()