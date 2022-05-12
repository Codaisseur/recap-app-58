import { configureStore } from "@reduxjs/toolkit";
import charactersReducer from "./characters/slice";

export default configureStore({
  reducer: {
    characters: charactersReducer,
  },
});
