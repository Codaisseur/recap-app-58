import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  list: [],
};

export const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {},
});

export const {} = charactersSlice.actions;

export default charactersSlice.reducer;
