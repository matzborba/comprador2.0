import { createSlice } from "@reduxjs/toolkit";

export const carouselSlice = createSlice({
  name: "carousel",
  initialState: {
    orders: [],
  },
  reducers: {
    changeData(state, { payload }) {
      return {
        ...state,
        orders: payload,
      };
    },
    getOrdersData(state) {
      state.orders = [
        {
          status: "Disponivel",
          orderId: 33331,
          rancher: "Mateus Borba",
          farm: "Fazenda teste",
          slaughter: {
            total: 150,
            ox: 75,
            cow: 75,
          },
          date: "08/09/2022",
        },
        {
          status: "Disponivel",
          orderId: 331,
          rancher: "Mateus Borba",
          farm: "Fazenda teste",
          slaughter: {
            total: 150,
            ox: 75,
            cow: 75,
          },
          date: "08/09/2022",
        },
        {
          status: "Disponivel",
          orderId: 3331,
          rancher: "Mateus Borba",
          farm: "Fazenda teste",
          slaughter: {
            total: 150,
            ox: 75,
            cow: 75,
          },
          date: "08/09/2022",
        },
        {
          status: "Em producao",
          orderId: 21322,
          rancher: "Andre Ferreira",
          farm: "Fazenda 1",
          slaughter: {
            total: 300,
            ox: 150,
            cow: 150,
          },
          date: "08/09/2022",
        },
        {
          status: "Disponivel",
          orderId: 2132,
          rancher: "Borba Teste 213",
          farm: "Fazenda 2",
          slaughter: {
            total: 200,
            ox: 100,
            cow: 100,
          },
          date: "08/09/2022",
        },
        {
          status: "Disponivel",
          orderId: 21832,
          rancher: "Pecuarista Novo",
          farm: "Fazenda 3",
          slaughter: {
            total: 50,
            ox: 25,
            cow: 25,
          },
          date: "08/09/2022",
        },
        {
          status: "Disponivel",
          orderId: 21532,
          rancher: "Sem nome",
          farm: "Fazenda 4",
          slaughter: {
            total: 150,
            ox: 75,
            cow: 75,
          },
          date: "08/09/2022",
        },
        {
          status: "Em producao",
          orderId: 21322222,
          rancher: "Andre Ferreira",
          farm: "Fazenda 1",
          slaughter: {
            total: 300,
            ox: 150,
            cow: 150,
          },
          date: "08/09/2022",
        },
      ];
    },
  },
});

export const { getOrdersData, changeData } = carouselSlice.actions;
export const selectOrder = state => {
  return state.carousel.orders;
};
export default carouselSlice.reducer;
