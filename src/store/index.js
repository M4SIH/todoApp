import { configureStore } from "@reduxjs/toolkit";
import formSlice from "./form-slice";
import inputSlice from "./input-slice";

import taskSlice from "./task-slice";
import uiSlice from "./ui-slice";

const store = configureStore({
  reducer: {
    tasks: taskSlice.reducer,
    form: formSlice.reducer,
    input: inputSlice.reducer,
    ui: uiSlice.reducer,
  },
});

export default store;
