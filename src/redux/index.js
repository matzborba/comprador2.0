import { configureStore } from "@reduxjs/toolkit";
import userReducer from "@/redux/modules/user";
import carouselReducer from "@/redux/modules/home/principal/carousel";
import actionsReducer from "./modules/home/aside/actions";
import timeLineActionsSlice from "./modules/home/aside/time-line";
import purchaseReducer from "./modules/home/principal/purchases";

export default configureStore({
  reducer: {
    user: userReducer,
    carousel: carouselReducer,
    aside: actionsReducer,
    asideTimeLine: timeLineActionsSlice,
    purchase: purchaseReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
