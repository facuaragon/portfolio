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
    sending: (state) => {
      return {
        value: {
          message: "Sending...",
          color: "orange",
        },
      };
    },
    enviando: (state) => {
      return {
        value: {
          message: "Enviando...",
          color: "orange",
        },
      };
    },
    success: (state) => {
      return {
        value: {
          message: "Message sent!",
          color: "green",
        },
      };
    },
    exitoso: (state) => {
      return {
        value: {
          message: "¡Mensaje enviado!",
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
    errorEs: (state) => {
      return {
        value: {
          message: "Hubo un problema al enviar el mensaje, intente nuevamente",
          color: "red",
        },
      };
    },
  },
});

export const { close, sending, enviando, success, exitoso, error, errorEs } =
  snackbar.actions;
export default snackbar.reducer;
