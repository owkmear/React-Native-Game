import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Dispatch } from "redux";
import { Rank, StatisticsSliceState } from "../model";
import { RootState } from "./store";

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
    setCorrect: (
      state: StatisticsSliceState,
      action: PayloadAction<number>
    ) => {
      state.correct = action.payload;
    },
    setWrong: (state: StatisticsSliceState, action: PayloadAction<number>) => {
      state.wrong = action.payload;
    },
    setTotal: (state: StatisticsSliceState, action: PayloadAction<number>) => {
      state.total = action.payload;
    },
    setRank: (state: StatisticsSliceState, action: PayloadAction<Rank>) => {
      state.rank = action.payload;
    },
  },
});

export const { setCorrect, setWrong, setTotal, setRank } = slice.actions;

export const addStatistic =
  (correct: boolean) => (dispatch: Dispatch, getState: () => RootState) => {
    const { statistics } = getState();
    dispatch(setTotal(statistics.total + 1));
    if (correct) dispatch(setCorrect(statistics.correct + 1));
    else dispatch(setWrong(statistics.wrong + 1));
    // @ts-ignore
    dispatch(calculateRank());
  };

export const calculateRank =
  () => (dispatch: Dispatch, getState: () => RootState) => {
    const { statistics } = getState();

    if (statistics.total < 10) {
      dispatch(setRank(Rank.Trainee));
    } else {
      const rate: number = statistics.correct / statistics.wrong;
      if (rate > 1.5) dispatch(setRank(Rank.Architect));
      else if (rate > 1) dispatch(setRank(Rank.Senior));
      else if (rate > 0.7) dispatch(setRank(Rank.Middle));
      else if (rate > 0.5) dispatch(setRank(Rank.Junior));
      else dispatch(setRank(Rank.Trainee));
    }
  };

export const selectTotal = (state: RootState) => state.statistics.total;
export const selectCorrect = (state: RootState) => state.statistics.correct;
export const selectWrong = (state: RootState) => state.statistics.wrong;
export const selectRank = (state: RootState) => state.statistics.rank;

export default slice.reducer;
