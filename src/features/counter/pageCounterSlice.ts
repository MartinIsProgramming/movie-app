import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PageCounter {
  count: number;
}

const initialState: PageCounter = {
  count: 1,
};

export const pageCounterSlice = createSlice({
  name: 'bannerMovie',
  initialState,
  reducers: {
    increaseBy: (state, action: PayloadAction<number>) => {
      state.count += action.payload;
    },

    decreaseBy: (state, action: PayloadAction<number>) => {
      state.count -= action.payload;
    },

    resetPageCount: state => {
      state.count = 1;
    },
  },
});

export const { increaseBy, decreaseBy, resetPageCount } = pageCounterSlice.actions;

export default pageCounterSlice.reducer;
