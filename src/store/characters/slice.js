import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  list: [],
};

export const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    startLoading: (state, action) => {
      state.loading = true;
    },
    saveCharacters: (state, action) => {
      // action.payload ==== [{}, {}, {}, {}]
      state.list = [...action.payload];
      state.loading = false;
    },
  },
});

export const { startLoading, saveCharacters } = charactersSlice.actions;

export default charactersSlice.reducer;
