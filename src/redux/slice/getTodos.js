/* eslint-disable no-unused-vars */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const localIP = "192.168.190.207"

//action to be dispatch when to fetch data from backend...
export const fetchTodos = createAsyncThunk("fetchTodos", async () => {
  const response =
    (await fetch("http://"+localIP+":5500/todos")) ||
    (await fetch("http://localhost:5500/todos"));
  return await response.json();
});

const getTodoSlice = createSlice({
  name: "getTodoSlice",
  initialState: {
    tasks: [],
    status: "idle",
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.tasks = action.payload;
    });
    builder.addCase(fetchTodos.rejected, (state, action) => {
      state.error = action.error.message;
      state.status = "failed";
    });
  },
});

export default getTodoSlice.reducer;
