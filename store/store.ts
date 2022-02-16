import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import questionsReducer from "./questionsSlice";

const store = configureStore({
  reducer: {
    questions: questionsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
