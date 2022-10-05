import { createSlice } from "@reduxjs/toolkit";
import { StatisticsSliceState } from "../model";
import { RootState } from "./store";
import { validateAnswer } from "./questionsSlice";

const initialState: StatisticsSliceState = {
  total: 0,
  correct: 0,
  wrong: 0,
};

export const slice = createSlice({
  name: "statistics",
  initialState,
  reducers: {
    setCorrect: (state: StatisticsSliceState) => {
      state.total++;
      state.correct++;
    },
    setWrong: (state: StatisticsSliceState) => {
      state.total++;
      state.wrong++;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(validateAnswer, (state, action) => {});
  },
});

export const { setCorrect, setWrong } = slice.actions;

export const selectTotal = (state: RootState) => state.statistics.total;
export const selectCorrect = (state: RootState) => state.statistics.correct;
export const selectWrong = (state: RootState) => state.statistics.wrong;

export default slice.reducer;
