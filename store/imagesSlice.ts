import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Dispatch } from "redux";
import { correctImages, wrongImages } from "./mockData";
import { ImagesSliceState, Image } from "../model";
import { RootState } from "./store";

const initialState: ImagesSliceState = {
  correctAll: correctImages,
  correct: correctImages[0],
  correctNumber: 0,
  wrongAll: wrongImages,
  wrong: wrongImages[0],
  wrongNumber: 0,
};

export const slice = createSlice({
  name: "images",
  initialState,
  reducers: {
    setImagesCorrectAnswer: (
      state: ImagesSliceState,
      action: PayloadAction<Image>
    ) => {
      state.correct = action.payload;
    },
    setImagesWrongAnswer: (
      state: ImagesSliceState,
      action: PayloadAction<Image>
    ) => {
      state.wrong = action.payload;
    },
    setImagesCurrentCorrect: (
      state: ImagesSliceState,
      action: PayloadAction<number>
    ) => {
      state.correctNumber = action.payload;
    },
    setImagesCurrentWrong: (
      state: ImagesSliceState,
      action: PayloadAction<number>
    ) => {
      state.wrongNumber = action.payload;
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
        state.images.correctAll[state.images.correctNumber]
      )
    );
    if (
      state.images.correctNumber >=
      Object.keys(state.images.correctAll).length - 1
    )
      dispatch(setImagesCurrentCorrect(0));
    else dispatch(setImagesCurrentCorrect(state.images.correctNumber + 1));
  };

export const wrongImagesAnswer =
  () => (dispatch: Dispatch, getState: () => RootState) => {
    const state: RootState = getState();

    if (
      state.images.wrongNumber >=
      Object.keys(state.images.wrongAll).length - 1
    )
      dispatch(setImagesCurrentWrong(0));
    else dispatch(setImagesCurrentWrong(state.images.wrongNumber + 1));
    dispatch(
      setImagesWrongAnswer(state.images.wrongAll[state.images.wrongNumber])
    );
  };

export const selectCorrectAnswerImage = (state: RootState) =>
  state.images.correct;
export const selectWrongAnswerImage = (state: RootState) => state.images.wrong;

export default slice.reducer;
