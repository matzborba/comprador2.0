import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getActions } from "@/services/api/home";

export const getActionsData = createAsyncThunk("getActionsData", async () => {
  try {
    const response = await getActions();
    return response.data;
  } catch (err) {
    return err.message;
  }
});

export const actionsSlice = createSlice({
  name: "actions",
  initialState: {
    actions: [],
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getActionsData.fulfilled, (state, action) => {
      state.actions = action.payload;
    });
  },
});

export const SelectAction = state => {
  return state.aside.actions;
};
export default actionsSlice.reducer;
