import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "carousel",
  initialState: {
    orders: [],
  },
  reducers: {
    changeCarouselData(state, payload) {
      return { ...state, orders: payload };
    },
  },
});

export const { changeCarouselData } = slice.actions;

export const selectCarousel = state => state.orders;

export default slice.reducer;
