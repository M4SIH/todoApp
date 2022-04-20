import { createSlice } from "@reduxjs/toolkit";

const initialTasksData = {
  items: [],
};

const taskSlice = createSlice({
  name: "task",
  initialState: initialTasksData,
  reducers: {
    getTasksData(state, action) {
      state.items = action.payload.items;
    },
    addTask(state, action) {
      const newTask = action.payload;
      state.items.push({
        _id: Date.now(),
        description: newTask,
        completed: false,
      });
    },
    deleteTask(state, action) {
      const removeTaskId = action.payload;
      const filteredItems = state.items.filter(
        (items) => items._id !== removeTaskId
      );
      state.items = filteredItems;
    },
    updateTask(state, action) {
      const newTaskId = action.payload;
      const taskIndex = state.items.findIndex((item) => item._id === newTaskId);
      state.items[taskIndex].completed = !state.items[taskIndex].completed;
    },
  },
});

export const taskActions = taskSlice.actions;

export default taskSlice;
