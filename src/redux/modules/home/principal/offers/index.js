import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getOffers } from "@/services/api/home";

export const getOffersData = createAsyncThunk("getOffers", async () => {
  try {
    const response = await getOffers();
    return response.data;
  } catch (err) {
    return err.message;
  }
});

export const offersSlice = createSlice({
  name: "offers",
  initialState: {
    offersData: {},
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getOffersData.fulfilled, (state, action) => {
      state.offersData = action.payload;
    });
  },
});

export const selectOffer = state => {
  return state.offers.offersData;
};
export default offersSlice.reducer;
