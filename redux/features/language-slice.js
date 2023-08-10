import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  value: {
    language: "en",
  },
};

export const language = createSlice({
  name: "language",
  initialState: initialState,
  reducers: {
    english: (state) => {
      return {
        value: {
          language: "en",
        },
      };
    },
    spanish: (state) => {
      return {
        value: {
          language: "es",
        },
      };
    },
  },
});

export const { english, spanish } = language.actions;
export default language.reducer;
