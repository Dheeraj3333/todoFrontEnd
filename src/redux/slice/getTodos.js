/* eslint-disable no-unused-vars */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const baseUrl = "https://todobackend-b8cy.onrender.com";

//action to be dispatch when to fetch data from backend...
export const fetchTodos = createAsyncThunk("fetchTodos", async () => {
  const response = await fetch(baseUrl+"/todos");
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
