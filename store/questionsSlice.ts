import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Dispatch } from "redux";
import {
  QuestionsSliceState,
  Grades,
  Languages,
  Question,
  Questions,
} from "../model";
import { RootState } from "./store";
import { filterQuestionsData } from "../Utils";
import { addStatistic } from "./statisticsSlice";
import { nextCorrectImage, nextWrongImage } from "./imagesSlice";

const initialState: QuestionsSliceState = {
  language: Languages.Russian,
  questionNumber: 1,
  answer: null,
  correct: null,
  question: filterQuestionsData(Grades.Junior, Languages.Russian)[1],
  questions: filterQuestionsData(Grades.Junior, Languages.Russian),
  completed: [],
  grade: Grades.Junior,
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
      state.grade = action.payload;
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
      state.grade = action.payload;
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
    const { questions } = getState();
    const correct = questions.answer === questions.question.correctAnswer;
    dispatch(setCorrect(correct));
    // @ts-ignore
    dispatch(addStatistic(correct));
    if (correct) {
      // @ts-ignore
      dispatch(nextCorrectImage());
      dispatch(setCompleted([...questions.completed, questions.question.id]));
    } else {
      // @ts-ignore
      dispatch(nextWrongImage());
    }
  };

export const updateGrade =
  (grade: Grades) => (dispatch: Dispatch, getState: () => RootState) => {
    const { questions } = getState();
    dispatch(setGrade(grade));
    const filteredQuestions: Questions = filterQuestionsData(
      grade,
      questions.language,
      questions.completed
    );
    dispatch(setQuestions(filteredQuestions));
    dispatch(setQuestionNumber(1));
    const question: Question = filteredQuestions[questions.questionNumber];
    dispatch(setQuestion(question));
    dispatch(setAnswer(null));
    dispatch(setCorrect(null));
  };

export const updateLanguage =
  (language: Languages) => (dispatch: Dispatch, getState: () => RootState) => {
    const { questions } = getState();
    dispatch(setLanguage(language));
    const filteredQuestions: Questions = filterQuestionsData(
      questions.grade,
      language,
      questions.completed
    );
    dispatch(setQuestions(filteredQuestions));
    const question: Question = filteredQuestions[questions.questionNumber];
    dispatch(setQuestion(question));
  };

export const nextQuestion =
  () => (dispatch: Dispatch, getState: () => RootState) => {
    const { questions } = getState();
    dispatch(setAnswer(null));
    if (
      questions.questionNumber + 1 >
      Object.keys(questions.questions).length
    ) {
      let grade: Grades;
      if (questions.grade === Grades.Senior) {
        grade = Grades.Junior;
        dispatch(setCompleted([]));
      } else if (questions.grade === Grades.Middle) grade = Grades.Senior;
      else grade = Grades.Middle;
      dispatch(setCurrentGrade(grade));
      const filteredQuestions: Questions = filterQuestionsData(
        grade,
        questions.language,
        questions.completed
      );
      dispatch(setQuestions(filteredQuestions));
      dispatch(setQuestionNumber(1));
      const filteredQuestion: Question = filteredQuestions[1];
      dispatch(setQuestion(filteredQuestion));
      dispatch(setAnswer(null));
      dispatch(setCorrect(null));
    } else {
      const number = questions.questionNumber + 1;
      dispatch(setQuestionNumber(number));
      dispatch(setQuestion(questions.questions[number]));
    }
  };

export const selectAnswer = (state: RootState) => state.questions.answer;
export const selectQuestion = (state: RootState) => state.questions.question;
export const selectLanguage = (state: RootState) => state.questions.language;
export const selectCurrentGrade = (state: RootState) => state.questions.grade;
export const selectExplanation = (state: RootState) =>
  state.questions.question.explanation;
export const selectCorrect = (state: RootState) => state.questions.correct;

export default slice.reducer;
