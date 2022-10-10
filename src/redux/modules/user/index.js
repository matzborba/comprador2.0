import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "user",
  initialState: {
    user: "",
    isLogged: false,
  },
  reducers: {
    changeUser(state, { payload }) {
      return { ...state, isLogged: true, user: payload };
    },
    logOut(state) {
      return { ...state, isLogged: false, user: "" };
    },
    async getAll() {
      try {
        const response = await getAll();
        state.value = response.data;
      } catch (err) {}
    },
  },
});

export const { changeUser, logOut } = slice.actions;

export const selectUser = state => state.user;

export default slice.reducer;
