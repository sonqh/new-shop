import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./products/productsSlice";
import categorySlice from "./category/categorySlice";
import tierSlice from "./tier/tierSlice";
import filterSlice from "./filters/filterSlice";

export const store = configureStore({
  reducer: {
    products: productsSlice,
    categories: categorySlice,
    tiers: tierSlice,
    filter: filterSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
