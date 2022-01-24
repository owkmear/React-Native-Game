import { createSlice } from "@reduxjs/toolkit";
import data from "./mockData";

export const slice = createSlice({
  name: "questions",
  initialState: {
    questionNumber: 1,
    questions: data,
  },
  reducers: {
    nextQuestion: (state) => {
      if (state.questionNumber < 3) state.questionNumber += 1;
    },
  },
});

export const { nextQuestion } = slice.actions;

export default slice.reducer;
