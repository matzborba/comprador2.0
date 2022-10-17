import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPurchases } from "@/services/api/home";

export const getPurchaseData = createAsyncThunk("getPurchase", async () => {
  try {
    const response = await getPurchases();
    return response.data;
  } catch (err) {
    return err.message;
  }
});
export const purchaseSlice = createSlice({
  name: "purchase",
  initialState: {
    purchaseData: {},
    loader: false,
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getPurchaseData.fulfilled, (state, action) => {
      state.purchaseData = action.payload;
      state.loader = false;
    });
    builder.addCase(getPurchaseData.pending, (state, action) => {
      state.loader = true;
    });
  },
});

export const SelectPurchases = state => {
  return state.purchase.purchaseData;
};
export const SelectLoader = state => {
  return state.purchase.loader;
};
export default purchaseSlice.reducer;
