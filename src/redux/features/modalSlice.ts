import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: true,
};

export const modalReducer = createSlice({
  name: "microphone-modal",
  initialState,
  reducers: {
    openModal: function (state) {
      state.isOpen = true;
    },
    closeModal: function (state) {
      state.isOpen = false;
    },
    toggle: function (state) {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { openModal, closeModal, toggle } = modalReducer.actions;
export default modalReducer.reducer;
