import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Dispatch } from "redux";
import { correctAnswerImages, wrongAnswerImages } from "./mockData";
import {
  QuestionsSliceState,
  Grades,
  Themes,
  Languages,
  Question,
  Questions,
  Image,
} from "../model";
import { RootState } from "./store";
import { filterQuestionsData } from "../Utils";
import { addStatistic } from "./statisticsSlice";
import { correctImagesAnswer, wrongImagesAnswer } from "./imagesSlice";

const initialState: QuestionsSliceState = {
  language: Languages.Russian,
  questionNumber: 1,
  answer: null,
  correct: null,
  question: filterQuestionsData(Grades.Junior, Languages.Russian)[1],
  questions: filterQuestionsData(Grades.Junior, Languages.Russian),
  completed: [],
  currentTheme: Themes.DATA_TYPES,
  currentGrade: Grades.Junior,
};

export const slice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    setAnswer: (
      state: QuestionsSliceState,
      action: PayloadAction<number | null>
    ) => {
      state.answer = action.payload;
    },
    setQuestionNumber: (
      state: QuestionsSliceState,
      action: PayloadAction<number>
    ) => {
      state.questionNumber = action.payload;
    },
    setQuestion: (
      state: QuestionsSliceState,
      action: PayloadAction<Question>
    ) => {
      state.question = action.payload;
    },
    setCurrentGrade: (
      state: QuestionsSliceState,
      action: PayloadAction<Grades>
    ) => {
      state.currentGrade = action.payload;
    },
    setCompleted: (
      state: QuestionsSliceState,
      action: PayloadAction<string[]>
    ) => {
      state.completed = action.payload;
    },
    setCorrect: (
      state: QuestionsSliceState,
      action: PayloadAction<boolean | null>
    ) => {
      state.correct = action.payload;
    },
    setQuestions: (
      state: QuestionsSliceState,
      action: PayloadAction<Questions>
    ) => {
      state.questions = action.payload;
    },
    setLanguage: (
      state: QuestionsSliceState,
      action: PayloadAction<Languages>
    ) => {
      state.language = action.payload;
    },
    setGrade: (state: QuestionsSliceState, action: PayloadAction<Grades>) => {
      state.currentGrade = action.payload;
    },
  },
});

export const {
  setAnswer,
  setGrade,
  setLanguage,
  setQuestionNumber,
  setQuestion,
  setCurrentGrade,
  setCompleted,
  setCorrect,
  setQuestions,
} = slice.actions;

export const validateAnswer =
  () => (dispatch: Dispatch, getState: () => RootState) => {
    const state: RootState = getState();
    const correct =
      state.questions.answer === state.questions.question.correctAnswer;
    dispatch(setCorrect(correct));
    // @ts-ignore
    dispatch(addStatistic(correct));
    if (correct) {
      // @ts-ignore
      dispatch(correctImagesAnswer());
      dispatch(
        setCompleted([
          ...state.questions.completed,
          state.questions.question.id,
        ])
      );
    } else {
      // @ts-ignore
      dispatch(wrongImagesAnswer());
    }
  };

export const updateGrade =
  (grade: Grades) => (dispatch: Dispatch, getState: () => RootState) => {
    const state: RootState = getState();
    dispatch(setGrade(grade));
    const questions: Questions = filterQuestionsData(
      grade,
      state.questions.language,
      state.questions.completed
    );
    dispatch(setQuestions(questions));
    dispatch(setQuestionNumber(1));
    const question: Question = questions[state.questions.questionNumber];
    dispatch(setQuestion(question));
    dispatch(setAnswer(null));
    dispatch(setCorrect(null));
  };

export const updateLanguage =
  (language: Languages) => (dispatch: Dispatch, getState: () => RootState) => {
    const state: RootState = getState();
    dispatch(setLanguage(language));
    const questions: Questions = filterQuestionsData(
      state.questions.currentGrade,
      language,
      state.questions.completed
    );
    dispatch(setQuestions(questions));
    const question: Question = questions[state.questions.questionNumber];
    dispatch(setQuestion(question));
  };

export const nextQuestion =
  () => (dispatch: Dispatch, getState: () => RootState) => {
    const state: RootState = getState();
    dispatch(setAnswer(null));
    if (
      state.questions.questionNumber + 1 >
      Object.keys(state.questions.questions).length
    ) {
      let grade = Grades.Junior;
      if (state.questions.currentGrade === Grades.Senior) {
        grade = Grades.Junior;
        dispatch(setCompleted([]));
      } else if (state.questions.currentGrade === Grades.Middle)
        grade = Grades.Senior;
      else grade = Grades.Middle;
      dispatch(setCurrentGrade(grade));
      const questions: Questions = filterQuestionsData(
        grade,
        state.questions.language,
        state.questions.completed
      );
      dispatch(setQuestions(questions));
      dispatch(setQuestionNumber(1));
      const question: Question = questions[1];
      dispatch(setQuestion(question));
      dispatch(setAnswer(null));
      dispatch(setCorrect(null));
    } else {
      const number = state.questions.questionNumber + 1;
      dispatch(setQuestionNumber(number));
      dispatch(setQuestion(state.questions.questions[number]));
    }
  };

export const selectAnswer = (state: RootState) => state.questions.answer;
export const selectQuestion = (state: RootState) => state.questions.question;
export const selectLanguage = (state: RootState) => state.questions.language;
export const selectCurrentGrade = (state: RootState) =>
  state.questions.currentGrade;
export const selectExplanation = (state: RootState) =>
  state.questions.question.explanation;
export const selectCorrect = (state: RootState) => state.questions.correct;

export default slice.reducer;
