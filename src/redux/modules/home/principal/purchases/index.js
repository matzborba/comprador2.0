import { createSlice } from "@reduxjs/toolkit";

export const purchaseSlice = createSlice({
  name: "purchase",
  initialState: {
    purchaseData: {},
  },
  reducers: {
    getPurchase(state) {
      state.purchaseData = {
        total: 100,
        price: 215,
        ox: {
          value: 80,
          price: 215.0,
        },
        cow: {
          value: 20,
          price: 205,
        },
      };
    },
  },
});

export const { getPurchase } = purchaseSlice.actions;
export const PurchaseSelector = state => {
  return state.purchase.purchaseData;
};
export default purchaseSlice.reducer;
