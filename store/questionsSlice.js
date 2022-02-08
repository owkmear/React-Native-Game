import { createSlice } from "@reduxjs/toolkit";
import { questionsData, grades, themes } from "./mockData";

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
  },
  reducers: {
    nextQuestion: (state) => {
      if (state.questionNumber + 1 >= state.questions.length) {
        state.isOver = true;
      } else {
        state.questionNumber += 1;
        state.question = state.questions[state.questionNumber];
      }
    },
    setAnswer: (state, action) => {
      state.answer = action.payload;
    },
    validateAnswer: (state) => {
      state.correct = state.answer === state.question.correctAnswer;
    },
    setGrade: (state, action) => {
      state.currentGrade = action.payload;
    },
  },
});

export const { nextQuestion, setAnswer, validateAnswer, setGrade } =
  slice.actions;

export default slice.reducer;
