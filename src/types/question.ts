import {Exercise} from "./exercise";
import {MuscleGroup} from "./muscleGroup";

export interface Question {
  exercises: Exercise[]
  muscleGroup: MuscleGroup[]
  title: string
}