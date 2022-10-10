import { configureStore } from "@reduxjs/toolkit";
import userReducer from "@/redux/modules/user";
import carouselReducer from "@/redux/modules/home/carousel";

export default configureStore({
  reducer: {
    user: userReducer,
    carousel: carouselReducer,
  },
});
