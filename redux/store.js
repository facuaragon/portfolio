import { configureStore } from "@reduxjs/toolkit";
import snackbarReducer from "./features/snackbar-slice";
export const store = configureStore({
  reducer: {
    snackbarReducer,
  },
});
