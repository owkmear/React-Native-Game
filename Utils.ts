import { Questions } from "./model";
import { questionsData } from "./store/mockData";

export const randomInteger = (min: number, max: number): number =>
  Math.floor(min + Math.random() * (max + 1 - min));

export const filterQuestionsData = (grade: string): Questions => {
  const filteredQuestions: Questions = {};
  let index = 1;
  for (let key in questionsData) {
    if (questionsData[key].grade === grade) {
      filteredQuestions[index] = questionsData[key];
      index++;
    }
  }
  return filteredQuestions;
};
