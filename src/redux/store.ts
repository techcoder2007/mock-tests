import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "./features/modalSlice";

const store = configureStore({
  reducer: {
    modal: modalSlice,
  },
});

export default store;
