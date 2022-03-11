import { createSlice } from "@reduxjs/toolkit";
import {
  questionsData,
  grades,
  themes,
  correctAnswerImages,
  wrongAnswerImages,
} from "./mockData";
import { Questions, QuestionsSliceState } from "../model";
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
    grades: grades,
    currentGrade: grades.JUNIOR,
    images: {
      correctAnswers: correctAnswerImages,
      correctAnswer: correctAnswerImages[0],
      currentCorrect: 0,
      wrongAnswers: wrongAnswerImages,
      wrongAnswer: wrongAnswerImages[0],
      currentWrong: 0,
    },
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
      if (state.correct) {
        if (
          state.images.currentCorrect + 1 >=
          Object.keys(state.images.correctAnswers).length
        )
          state.images.currentCorrect = 1;
        else state.images.currentCorrect++;
        state.images.correctAnswer =
          state.images.correctAnswers[state.images.currentCorrect];
      } else {
        if (
          state.images.currentWrong + 1 >=
          Object.keys(state.images.wrongAnswers).length
        )
          state.images.currentWrong = 1;
        else state.images.currentWrong++;
        state.images.wrongAnswer =
          state.images.wrongAnswers[state.images.currentCorrect];
      }
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
export const selectGrades = (state: RootState) => state.questions.grades;
export const selectCorrectAnswerImage = (state: RootState) =>
  state.questions.images.correctAnswer;
export const selectWrongAnswerImage = (state: RootState) =>
  state.questions.images.wrongAnswer;

export default slice.reducer;
