import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PageCounter {
  isOpen: boolean;
  isAdding: boolean;
}

const initialState: PageCounter = {
  isOpen: false,
  isAdding: true,
};

export const noticePopOverSlice = createSlice({
  name: 'noticePopOver',
  initialState,
  reducers: {
    openPopOver: (state, action: PayloadAction<{ isAdding: boolean }>) => {
      state.isOpen = true;
      state.isAdding = action.payload.isAdding;
    },

    closePopOver: state => {
      state.isOpen = false;
    },
  },
});

export const { openPopOver, closePopOver } = noticePopOverSlice.actions;

export default noticePopOverSlice.reducer;
