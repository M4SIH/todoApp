import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  enteredValue: "",
  isTouched: false,
};

const inputSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setEnteredValue(state, action) {
      state.enteredValue = action.payload;
    },
    setIsTouched(state, action) {
      state.isTouched = action.payload;
    },
  },
});

export const inputActions = inputSlice.actions;

export default inputSlice;
