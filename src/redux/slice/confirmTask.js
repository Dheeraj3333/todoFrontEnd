import { createSlice } from "@reduxjs/toolkit";

export const confirmTaskSlice = createSlice({
  name: "confirmTask",
  initialState: false,
  reducers: {
    confirm: (state) => !state,
  },
});

export default confirmTaskSlice.reducer;
export const { confirm } = confirmTaskSlice.actions;
