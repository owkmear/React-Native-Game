import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Dispatch } from "redux";
import { Rank, StatisticsSliceState } from "../model";
import { RootState } from "./store";
import { setRankImage } from "./imagesSlice";

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
    const { rank } = statistics;

    let calculatedRank: Rank;
    if (statistics.total < 10) {
      calculatedRank = Rank.Trainee;
    } else {
      const rate: number = statistics.correct / statistics.wrong;
      if (rate > 1.5) calculatedRank = Rank.Architect;
      else if (rate > 1) calculatedRank = Rank.Senior;
      else if (rate > 0.7) calculatedRank = Rank.Middle;
      else if (rate > 0.5) calculatedRank = Rank.Junior;
      else calculatedRank = Rank.Trainee;
    }

    if (rank !== calculatedRank) {
      dispatch(setRank(calculatedRank));
      dispatch(setRankImage(calculatedRank));
    }
  };

export const selectTotal = (state: RootState) => state.statistics.total;
export const selectCorrect = (state: RootState) => state.statistics.correct;
export const selectWrong = (state: RootState) => state.statistics.wrong;
export const selectRank = (state: RootState) => state.statistics.rank;

export default slice.reducer;
