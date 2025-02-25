import { createSlice } from "@reduxjs/toolkit";

let date = new Date();
date = date.toISOString().split("T")[0];

export const taskDateSlice = createSlice({
  name: "taskDate",
  initialState: date,
  reducers: {
    setDate: (state, actions) => actions.payload,
  },
});

export const { setDate } = taskDateSlice.actions;
export default taskDateSlice.reducer;
