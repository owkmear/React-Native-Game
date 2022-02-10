import { createSlice } from "@reduxjs/toolkit";
import { questionsData, grades, themes } from "./mockData";
import { QuestionsSliceState } from "../model";

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
    grades: grades,
    currentGrade: grades.JUNIOR,
  } as QuestionsSliceState,
  reducers: {
    nextQuestion: (state) => {
      // @ts-ignore
      if (state.questionNumber + 1 >= state.questions.length) {
        state.isOver = true;
      } else {
        state.questionNumber += 1;
        // @ts-ignore
        state.question = state.questions[state.questionNumber];
      }
    },
    setAnswer: (state, action) => {
      state.answer = action.payload;
    },
    validateAnswer: (state) => {
      // @ts-ignore
      state.correct = state.answer === state.question.correctAnswer;
    },
    setGrade: (state, action) => {
      state.currentGrade = action.payload;
    },
  },
});

export const { nextQuestion, setAnswer, validateAnswer, setGrade } =
  slice.actions;

// @ts-ignore
export default slice.reducer;
