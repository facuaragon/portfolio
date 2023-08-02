import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  value: {
    message: "",
    color: "",
  },
};

export const snackbar = createSlice({
  name: "snackbar",
  initialState: initialState,
  reducers: {
    close: () => {
      return initialState;
    },
    success: (state) => {
      return {
        value: {
          message: "Message sent!",
          color: "green",
        },
      };
    },
    error: (state) => {
      return {
        value: {
          message:
            "There was a problem in sending the message, please try again",
          color: "red",
        },
      };
    },
  },
});

export const { close, success, error } = snackbar.actions;
export default snackbar.reducer;
