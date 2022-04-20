import { configureStore } from "@reduxjs/toolkit";
import formSlice from "./form-slice";

import taskSlice from "./task-slice";

const store = configureStore({
  reducer: { tasks: taskSlice.reducer, form: formSlice.reducer },
});

export default store;
