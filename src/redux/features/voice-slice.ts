import { PayloadAction, createSlice } from "@reduxjs/toolkit";
type initialStateType = {
  value: {
    open: boolean;
  };
};

const initialState: initialStateType = {
  value: {
    open: true,
  },
} as initialStateType;

export const voiceSlice = createSlice({
  name: "voice-modal-slice",
  initialState,
  reducers: {
    openModal: function (state) {
      state.value.open = true;
    },
    closeModal: function (state) {
      state.value.open = false;
    },
    toggle: function (state) {
      state.value.open = !state.value.open;
    },
  },
});
