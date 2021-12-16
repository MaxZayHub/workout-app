import { Question } from './question'

export interface Data {
  name: string;
  slug: string;
  questions: Question[];
}
