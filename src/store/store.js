import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../reducers/project";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
});
