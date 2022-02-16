import { Grades } from "./model";

type GradesOptions = {
  value: Grades;
  label: string;
}[];

export const gradesOptions: GradesOptions = [
  { value: Grades.Junior, label: "Junior" },
  { value: Grades.Middle, label: "Middle" },
  { value: Grades.Senior, label: "Senior" },
];
