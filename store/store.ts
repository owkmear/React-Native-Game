import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import questionsReducer from "./questionsSlice";

export default configureStore({
  reducer: {
    questions: questionsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
