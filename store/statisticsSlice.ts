import { createSlice } from "@reduxjs/toolkit";
import { Rank, StatisticsSliceState } from "../model";
import { RootState } from "./store";
import { validateAnswer } from "./questionsSlice";

const initialState: StatisticsSliceState = {
  total: 0,
  correct: 0,
  wrong: 0,
  rank: Rank.Trainee,
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
    calculateResult: (state: StatisticsSliceState) => {
      if (state.total < 10) {
        state.rank = Rank.Trainee;
      } else {
        const rate = state.correct / state.wrong;
        if (rate > 1.5) state.rank = Rank.Architect;
        else if (rate > 1) state.rank = Rank.Senior;
        else if (rate > 0.7) state.rank = Rank.Middle;
        else if (rate > 0.5) state.rank = Rank.Junior;
        else state.rank = Rank.Trainee;
      }
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
export const selectRank = (state: RootState) => state.statistics.rank;

export default slice.reducer;
