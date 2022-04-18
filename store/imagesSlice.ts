import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Dispatch } from "redux";
import { correctAnswerImages, wrongAnswerImages } from "./mockData";
import { ImagesSliceState, Grades } from "../model";
import { RootState } from "./store";

const initialState: ImagesSliceState = {
  correctAnswers: correctAnswerImages,
  correctAnswer: correctAnswerImages[0],
  currentCorrect: 0,
  wrongAnswers: wrongAnswerImages,
  wrongAnswer: wrongAnswerImages[0],
  currentWrong: 0,
};

export const slice = createSlice({
  name: "images",
  initialState,
  reducers: {
    nextCorrect: (state: ImagesSliceState) => {
      state.correctAnswer = state.correctAnswers[state.currentCorrect];
      if (state.currentCorrect >= Object.keys(state.correctAnswers).length - 1)
        state.currentCorrect = 0;
      else state.currentCorrect++;
    },
    nextWrong: (state: ImagesSliceState) => {
      if (state.currentWrong >= Object.keys(state.wrongAnswers).length - 1)
        state.currentWrong = 0;
      else state.currentWrong++;
      state.wrongAnswer = state.wrongAnswers[state.currentWrong];
    },
  },
});

export const { nextCorrect, nextWrong } = slice.actions;

export const selectCorrectAnswerImage = (state: RootState) =>
  state.images.correctAnswer;
export const selectWrongAnswerImage = (state: RootState) =>
  state.images.wrongAnswer;

export default slice.reducer;
