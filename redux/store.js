import { configureStore } from "@reduxjs/toolkit";
import snackbarReducer from "./features/snackbar-slice";
import languageReducer from "./features/language-slice";
export const store = configureStore({
  reducer: {
    snackbarReducer,
    languageReducer,
  },
});
