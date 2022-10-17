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
    loader: false,
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getTableData.fulfilled, (state, action) => {
      state.tableData = action.payload;
      state.loader = false;
    });
    builder.addCase(getTableData.pending, (state, action) => {
      state.loader = true;
    });
  },
});

export const selectTable = state => {
  return state.table.tableData;
};
export const SelectLoader = state => {
  return state.table.loader;
};
export default tableSlice.reducer;
