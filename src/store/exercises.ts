import {makeAutoObservable, toJS} from "mobx";
import {Question} from "../types/question";

interface Data {
  name: string,
  slug: string,
  questions: Question[]
}

class Exercises {
  private exercises: Data = {name: '', slug: '', questions: []}

  constructor() {
    makeAutoObservable(this)
  }

  fetchExercises() {
    fetch('https://rnd.kilohealthservices.com/api/quizzes/workouts?api_token=4bfcebd0-0216-4572-bdb7-939e9600b9b2')
      .then(res => res.json())
      .then(json => {
        this.exercises = json.data as Data
        console.log(json.data)
      })
  }

  getExercises () {
    return toJS(this.exercises)
  }

}

export default new Exercises()