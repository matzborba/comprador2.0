import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getActionsPerDate } from "@/services/api/home";

export const ActionsPerDate = createAsyncThunk(
  "getActionsPerDate",
  async () => {
    try {
      const response = await getActionsPerDate();
      return response.data;
    } catch (err) {
      return err.message;
    }
  }
);

export const timeLineActionsSlice = createSlice({
  name: "timeLineAction",
  initialState: {
    actionsPerDate: [],
    loader: false,
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(ActionsPerDate.fulfilled, (state, action) => {
      state.actionsPerDate = action.payload;
      state.loader = false;
    });
    builder.addCase(ActionsPerDate.pending, (state, action) => {
      state.loader = true;
    });
  },
});

export const selectActionsPerDate = state => {
  return state.asideTimeLine.actionsPerDate;
};
export const SelectLoader = state => {
  return state.asideTimeLine.loader;
};
export default timeLineActionsSlice.reducer;
