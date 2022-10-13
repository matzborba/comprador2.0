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
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(ActionsPerDate.fulfilled, (state, action) => {
      state.actionsPerDate = action.payload;
    });
  },
});

export const selectActionsPerDate = state => {
  return state.asideTimeLine.actionsPerDate;
};
export default timeLineActionsSlice.reducer;
