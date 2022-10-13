import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getOrders } from "@/services/api/home";
import { add } from "date-fns";

export const getOrdersData = createAsyncThunk("getOrdersData", async () => {
  try {
    const response = await getOrders();
    return response.data;
  } catch (err) {
    return err.message;
  }
});

export const carouselSlice = createSlice({
  name: "carousel",
  initialState: {
    orders: [],
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getOrdersData.fulfilled, (state, action) => {
      state.orders = action.payload;
    });
  },
});

export const { changeData } = carouselSlice.actions;
export const selectOrder = state => {
  return state.carousel.orders;
};
export default carouselSlice.reducer;
