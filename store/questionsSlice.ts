import { createSlice } from "@reduxjs/toolkit";
import { questionsData, grades, themes } from "./mockData";
import { Questions, QuestionsSliceState } from "../model";

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

export default slice.reducer;
