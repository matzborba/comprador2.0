import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getTable } from "@/services/api/home";

export const getTableData = createAsyncThunk("getTable", async () => {
  try {
    const response = await getTable();
    return response.data;
  } catch (err) {
    return err.message;
  }
});

export const tableSlice = createSlice({
  name: "table",
  initialState: {
    tableData: [],
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getTableData.fulfilled, (state, action) => {
      state.tableData = action.payload;
    });
  },
});

export const selectTable = state => {
  return state.table.tableData;
};
export default tableSlice.reducer;
