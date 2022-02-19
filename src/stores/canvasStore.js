import { createSlice } from "@reduxjs/toolkit";

export const canvasStore = createSlice({
  name: "canvasStore",
  initialState: {
    data: [],
  },
  reducers: {
    setData: (state, { payload }) => {
      state.data = payload;
    },
  },
});

export const { setData } = canvasStore.actions;

export default canvasStore.reducer;
