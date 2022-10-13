import { createSlice } from "@reduxjs/toolkit";

export const timeLineActionsSlice = createSlice({
  name: "timeLineAction",
  initialState: {
    actionsPerDate: [],
  },
  reducers: {
    getActionsPerDate(state) {
      state.actionsPerDate = [
        {
          date: "10:30",
          status: "Aguardando",
          farm: "Fazenda Flores",
          label: "Acompanhar Embarque",
          id: 0,
        },
        {
          date: "09:30",
          status: "Vencido",
          farm: "Fazenda Flores",
          label: "Acompanhar Embarque",
          id: 1,
        },
        {
          date: "09:00",
          status: "Finalizada",
          farm: "Fazenda Flores",
          label: "Acompanhar Embarque",
          id: 2,
        },
        {
          date: "08:00",
          status: "Finalizada",
          farm: "Fazenda Flores",
          label: "Acompanhar Embarque",
          id: 3,
        },
      ];
    },
  },
});

export const { getActionsPerDate } = timeLineActionsSlice.actions;
export const ActionsPerDate = state => {
  return state.asideTimeLine.actionsPerDate;
};
export default timeLineActionsSlice.reducer;
