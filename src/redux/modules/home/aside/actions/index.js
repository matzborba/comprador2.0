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
    loader: false,
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getActionsData.fulfilled, (state, action) => {
      state.actions = action.payload;
      state.loader = false;
    });
    builder.addCase(getActionsData.pending, (state, action) => {
      state.loader = true;
    });
  },
});

export const SelectAction = state => {
  return state.aside.actions;
};
export const SelectLoader = state => {
  return state.aside.loader;
};
export default actionsSlice.reducer;
