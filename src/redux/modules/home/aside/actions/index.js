import { createSlice } from "@reduxjs/toolkit";

export const actionsSlice = createSlice({
  name: "actions",
  initialState: {
    actions: [],
  },
  reducers: {
    getActionsData(state) {
      state.actions = [
        {
          status: "Ações",
          value: 80,
        },
        {
          status: "Final",
          value: 60,
        },
        {
          status: "Vencido",
          value: 20,
        },
      ];
    },
  },
});

export const { getActionsData } = actionsSlice.actions;
export const SelectAction = state => {
  return state.aside.actions;
};
export default actionsSlice.reducer;
