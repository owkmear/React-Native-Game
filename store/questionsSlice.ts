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
} from "../model";
import { RootState } from "./store";
import { filterQuestionsData } from "../Utils";
import { incrementCorrect } from "./statisticsSlice";

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
  images: {
    correctAnswers: correctAnswerImages,
    correctAnswer: correctAnswerImages[0],
    currentCorrect: 0,
    wrongAnswers: wrongAnswerImages,
    wrongAnswer: wrongAnswerImages[0],
    currentWrong: 0,
  },
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
    setGrade: (state: QuestionsSliceState, action: PayloadAction<Grades>) => {
      state.currentGrade = action.payload;
      state.questions = filterQuestionsData(
        state.currentGrade,
        state.language,
        state.completed
      );
      state.questionNumber = 1;
      state.question = state.questions[state.questionNumber];
      state.answer = null;
      state.correct = null;
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

export const updateLanguage =
  (language: Languages) => (dispatch: Dispatch, getState: () => RootState) => {
    const state: RootState = getState();
    dispatch(setLanguage(language));
    dispatch(
      setQuestions(
        filterQuestionsData(
          state.questions.currentGrade,
          state.questions.language,
          state.questions.completed
        )
      )
    );
    dispatch(
      setQuestion(state.questions.questions[state.questions.questionNumber])
    );
  };

export const nextQuestion =
  () => (dispatch: Dispatch, getState: () => RootState) => {
    const state: RootState = getState();
    dispatch(setAnswer(null));
    if (
      state.questions.questionNumber + 1 >
      Object.keys(state.questions.questions).length
    ) {
      if (state.questions.currentGrade === Grades.Senior) {
        dispatch(setCurrentGrade(Grades.Junior));
        dispatch(setCompleted([]));
      } else if (state.questions.currentGrade === Grades.Middle)
        dispatch(setCurrentGrade(Grades.Senior));
      else if (state.questions.currentGrade === Grades.Junior)
        dispatch(setCurrentGrade(Grades.Middle));
      dispatch(
        setQuestions(
          filterQuestionsData(
            state.questions.currentGrade,
            state.questions.language,
            state.questions.completed
          )
        )
      );
      dispatch(setQuestionNumber(1));
      dispatch(
        setQuestion(state.questions.questions[state.questions.questionNumber])
      );
      dispatch(setAnswer(null));
      dispatch(setCorrect(null));
    } else {
      dispatch(setQuestionNumber(state.questions.questionNumber + 1));
      dispatch(
        setQuestion(state.questions.questions[state.questions.questionNumber])
      );
    }
    dispatch(incrementCorrect());
  };

export const changeGrade = (grade: Grades) => (dispatch: Dispatch) => {
  dispatch(setGrade(grade));
  dispatch(setGrade(grade));
  dispatch(setGrade(grade));
};

export const changeGradeAsync =
  (grade: Grades) => async (dispatch: Dispatch) => {
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
export const selectLanguage = (state: RootState) => state.questions.language;
export const selectCurrentGrade = (state: RootState) =>
  state.questions.currentGrade;
export const selectExplanation = (state: RootState) =>
  state.questions.question.explanation;
export const selectCorrect = (state: RootState) => state.questions.correct;
export const selectCorrectAnswerImage = (state: RootState) =>
  state.questions.images.correctAnswer;
export const selectWrongAnswerImage = (state: RootState) =>
  state.questions.images.wrongAnswer;

export default slice.reducer;
