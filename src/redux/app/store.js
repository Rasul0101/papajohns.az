import { configureStore } from "@reduxjs/toolkit";
import FoodReducer from "../features/foodSlice";
import BasketReducer from "../features/basketSlice";

export const store = configureStore({
  reducer: {
    food: FoodReducer,
    basket: BasketReducer,
  },
});
