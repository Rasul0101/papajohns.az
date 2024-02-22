import { createSlice } from "@reduxjs/toolkit";

const basketSlice = createSlice({
  name: "basket",
  initialState: {
    basketItems: [],
    quantity: 0,
    total: 0,
  },
});

export default basketSlice.reducer;
