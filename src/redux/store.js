import { configureStore } from "@reduxjs/toolkit";
import registeredTodoReducer from "./slice/registeredTodo";
import confirmTaskReducer from "./slice/confirmTask";
import taskDateReducer from "./slice/taskDate"
import getTodoReducer from "./slice/getTodos";

export const store = configureStore({
  reducer: {
    registeredTodo: registeredTodoReducer,
    confirmTask: confirmTaskReducer,
    taskDate:taskDateReducer,
    getTodo:getTodoReducer,
  },
});
