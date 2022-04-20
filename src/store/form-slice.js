import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  input: "",
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    getInput(state, action) {
      const newInput = action.payload;
      state.input = newInput;
    },
  },
});

export const formActions = formSlice.actions;

export default formSlice;
