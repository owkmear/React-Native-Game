import { createSlice } from "@reduxjs/toolkit";
import { questionsData, themes } from "./mockData";
import { Questions, QuestionsSliceState, Grades } from "../model";
import { RootState } from "./store";

export const slice = createSlice({
  name: "questions",
  initialState: {
    questionNumber: 1,
    isOver: false,
    answer: null,
    correct: null,
    question: questionsData[1],
    questions: questionsData,
    currentTheme: themes.DATA_TYPES,
    currentGrade: Grades.Junior,
  } as QuestionsSliceState,
  reducers: {
    nextQuestion: (state: QuestionsSliceState) => {
      if (state.questionNumber + 1 >= Object.keys(state.questions).length) {
        state.isOver = true;
      } else {
        state.questionNumber += 1;
        state.question = state.questions[state.questionNumber];
      }
    },
    setAnswer: (state: QuestionsSliceState, action) => {
      state.answer = action.payload;
    },
    validateAnswer: (state: QuestionsSliceState) => {
      state.correct = state.answer === state.question.correctAnswer;
    },
    setGrade: (state: QuestionsSliceState, action) => {
      state.currentGrade = action.payload;
      const filteredQuestions: Questions = {};
      let index = 1;
      for (let key in questionsData) {
        if (questionsData[key].grade === state.currentGrade) {
          filteredQuestions[index] = questionsData[key];
          index++;
        }
      }
      state.questions = filteredQuestions;
    },
  },
});

export const { nextQuestion, setAnswer, validateAnswer, setGrade } =
  slice.actions;

export const selectAnswer = (state: RootState) => state.questions.answer;
export const selectQuestion = (state: RootState) => state.questions.question;
export const selectCurrentGrade = (state: RootState) =>
  state.questions.currentGrade;
export const selectExplanation = (state: RootState) =>
  state.questions.question.explanation;
export const selectCorrect = (state: RootState) => state.questions.correct;

export default slice.reducer;
