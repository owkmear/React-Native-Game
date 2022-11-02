import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Dispatch } from "redux";
import { correctAnswerImages, wrongAnswerImages } from "./mockData";
import { ImagesSliceState, Image } from "../model";
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
    setImagesCorrectAnswer: (
      state: ImagesSliceState,
      action: PayloadAction<Image>
    ) => {
      state.correctAnswer = action.payload;
    },
    setImagesWrongAnswer: (
      state: ImagesSliceState,
      action: PayloadAction<Image>
    ) => {
      state.wrongAnswer = action.payload;
    },
    setImagesCurrentCorrect: (
      state: ImagesSliceState,
      action: PayloadAction<number>
    ) => {
      state.currentCorrect = action.payload;
    },
    setImagesCurrentWrong: (
      state: ImagesSliceState,
      action: PayloadAction<number>
    ) => {
      state.currentWrong = action.payload;
    },
  },
});

export const {
  setImagesCorrectAnswer,
  setImagesWrongAnswer,
  setImagesCurrentCorrect,
  setImagesCurrentWrong,
} = slice.actions;

export const correctImagesAnswer =
  () => (dispatch: Dispatch, getState: () => RootState) => {
    const state: RootState = getState();
    dispatch(
      setImagesCorrectAnswer(
        state.images.correctAnswers[state.images.currentCorrect]
      )
    );
    if (
      state.images.currentCorrect >=
      Object.keys(state.images.correctAnswers).length - 1
    )
      dispatch(setImagesCurrentCorrect(0));
    else dispatch(setImagesCurrentCorrect(state.images.currentCorrect + 1));
  };

export const wrongImagesAnswer =
  () => (dispatch: Dispatch, getState: () => RootState) => {
    const state: RootState = getState();

    if (
      state.images.currentWrong >=
      Object.keys(state.images.wrongAnswers).length - 1
    )
      dispatch(setImagesCurrentWrong(0));
    else dispatch(setImagesCurrentWrong(state.images.currentWrong + 1));
    dispatch(
      setImagesWrongAnswer(state.images.wrongAnswers[state.images.currentWrong])
    );
  };

export const selectCorrectAnswerImage = (state: RootState) =>
  state.images.correctAnswer;
export const selectWrongAnswerImage = (state: RootState) =>
  state.images.wrongAnswer;

export default slice.reducer;
