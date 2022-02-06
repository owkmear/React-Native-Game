import { createSlice } from "@reduxjs/toolkit";
import data from "./mockData";

export const slice = createSlice({
  name: "questions",
  initialState: {
    questionNumber: 1,
    isOver: false,
    answer: null,
    correct: null,
    question: data[1],
    questions: data,
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
  },
});

export const { nextQuestion, setAnswer, validateAnswer } = slice.actions;

export default slice.reducer;
