import { Questions, GradesOptions, Grades } from "./model";
import { questionsData } from "./store/mockData";

export const randomInteger = (min: number, max: number): number =>
  Math.floor(min + Math.random() * (max + 1 - min));

export const filterQuestionsData = (
  grade: string,
  completed: string[] = []
): Questions => {
  const filteredQuestions: Questions = {};
  let index = 1;
  for (let key in questionsData) {
    if (
      questionsData[key].grade === grade &&
      !completed.includes(questionsData[key].id)
    ) {
      filteredQuestions[index] = questionsData[key];
      index++;
    }
  }
  return filteredQuestions;
};

export const gradesOptions: GradesOptions = [
  { value: Grades.Junior, label: Grades.Junior },
  { value: Grades.Middle, label: Grades.Middle },
  { value: Grades.Senior, label: Grades.Senior },
];
