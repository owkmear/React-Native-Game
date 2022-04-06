import { createSlice } from "@reduxjs/toolkit";
import { Dispatch } from "redux";
import {
  grades,
  themes,
  correctAnswerImages,
  wrongAnswerImages,
} from "./mockData";
import { QuestionsSliceState } from "../model";
import { RootState } from "./store";
import { filterQuestionsData } from "../Utils";

export const slice = createSlice({
  name: "questions",
  initialState: {
    questionNumber: 1,
    answer: null,
    correct: null,
    question: filterQuestionsData(grades.JUNIOR)[1],
    questions: filterQuestionsData(grades.JUNIOR),
    completed: [],
    currentTheme: themes.DATA_TYPES,
    grades: grades,
    currentGrade: grades.JUNIOR,
    images: {
      correctAnswers: correctAnswerImages,
      correctAnswer: null,
      currentCorrect: 0,
      wrongAnswers: wrongAnswerImages,
      wrongAnswer: null,
      currentWrong: 0,
    },
  } as QuestionsSliceState,
  reducers: {
    nextQuestion: (state: QuestionsSliceState) => {
      state.answer = null;
      if (state.questionNumber + 1 > Object.keys(state.questions).length) {
        if (state.currentGrade === grades.SENIOR) {
          state.currentGrade = grades.JUNIOR;
          state.completed = [];
        } else if (state.currentGrade === grades.MIDDLE)
          state.currentGrade = grades.SENIOR;
        else if (state.currentGrade === grades.JUNIOR)
          state.currentGrade = grades.MIDDLE;
        state.questions = filterQuestionsData(
          state.currentGrade,
          state.completed
        );
        state.questionNumber = 1;
        state.question = state.questions[state.questionNumber];
        state.answer = null;
        state.correct = null;
      } else {
        state.questionNumber++;
        state.question = state.questions[state.questionNumber];
      }
    },
    setAnswer: (state: QuestionsSliceState, action) => {
      state.answer = action.payload;
    },
    validateAnswer: (state: QuestionsSliceState) => {
      state.correct = state.answer === state.question.correctAnswer;
      if (state.correct) {
        state.images.correctAnswer =
          state.images.correctAnswers[state.images.currentCorrect];
        if (
          state.images.currentCorrect >=
          Object.keys(state.images.correctAnswers).length - 1
        )
          state.images.currentCorrect = 0;
        else state.images.currentCorrect++;
        state.completed.push(state.question.id);
      } else {
        if (
          state.images.currentWrong >=
          Object.keys(state.images.wrongAnswers).length - 1
        )
          state.images.currentWrong = 0;
        else state.images.currentWrong++;
        state.images.wrongAnswer =
          state.images.wrongAnswers[state.images.currentWrong];
      }
    },
    setGrade: (state: QuestionsSliceState, action) => {
      state.currentGrade = action.payload;
      state.questions = filterQuestionsData(
        state.currentGrade,
        state.completed
      );
      state.questionNumber = 1;
      state.question = state.questions[state.questionNumber];
      state.answer = null;
      state.correct = null;
    },
  },
});

export const { nextQuestion, setAnswer, validateAnswer, setGrade } =
  slice.actions;

export const changeGrade = (grade: string) => (dispatch: Dispatch) => {
  dispatch(setGrade(grade));
  dispatch(setGrade(grade));
  dispatch(setGrade(grade));
};

export const changeGradeAsync =
  (grade: string) => async (dispatch: Dispatch) => {
    await setTimeout(() => {
      dispatch(setGrade(grade));
    }, 1000);

    await setTimeout(() => {
      dispatch(setGrade(grade));
    }, 2000);

    await setTimeout(() => {
      dispatch(setGrade(grade));
    }, 3000);
  };

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
