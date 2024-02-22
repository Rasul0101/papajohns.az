import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apiUrl = "https://papaapi.yetim.me/food";

export const myData = createAsyncThunk("foodData/myData", async () => {
  const response = await axios.get(apiUrl);
  return response.data;
});

const foodSlice = createSlice({
  name: "foodData",
  initialState: {
    data: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(myData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(myData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(myData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default foodSlice.reducer;
