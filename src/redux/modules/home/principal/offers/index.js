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
    loader: false,
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getOffersData.fulfilled, (state, action) => {
      state.offersData = action.payload;
      state.loader = false;
    });
    builder.addCase(getOffersData.pending, (state, action) => {
      state.loader = true;
    });
  },
});

export const selectOffer = state => {
  return state.offers.offersData;
};
export const SelectLoader = state => {
  return state.offers.loader;
};
export default offersSlice.reducer;
