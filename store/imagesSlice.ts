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
    setCorrect: (state: ImagesSliceState, action: PayloadAction<Image>) => {
      state.correct = action.payload;
    },
    setWrong: (state: ImagesSliceState, action: PayloadAction<Image>) => {
      state.wrong = action.payload;
    },
    setCorrectNumber: (
      state: ImagesSliceState,
      action: PayloadAction<number>
    ) => {
      state.correctNumber = action.payload;
    },
    setWrongNumber: (
      state: ImagesSliceState,
      action: PayloadAction<number>
    ) => {
      state.wrongNumber = action.payload;
    },
  },
});

export const { setCorrect, setWrong, setCorrectNumber, setWrongNumber } =
  slice.actions;

export const correctImagesAnswer =
  () => (dispatch: Dispatch, getState: () => RootState) => {
    const { images } = getState();
    dispatch(setCorrect(images.correctAll[images.correctNumber]));
    if (images.correctNumber >= Object.keys(images.correctAll).length - 1)
      dispatch(setCorrectNumber(0));
    else dispatch(setCorrectNumber(images.correctNumber + 1));
  };

export const wrongImagesAnswer =
  () => (dispatch: Dispatch, getState: () => RootState) => {
    const { images } = getState();
    if (images.wrongNumber >= Object.keys(images.wrongAll).length - 1)
      dispatch(setWrongNumber(0));
    else dispatch(setWrongNumber(images.wrongNumber + 1));
    dispatch(setWrong(images.wrongAll[images.wrongNumber]));
  };

export const selectCorrectAnswerImage = (state: RootState) =>
  state.images.correct;
export const selectWrongAnswerImage = (state: RootState) => state.images.wrong;

export default slice.reducer;
