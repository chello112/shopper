import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/apiSlice";
import cartSliceReducer from "../features/cartSlice";

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    cart: cartSliceReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

export default store;
