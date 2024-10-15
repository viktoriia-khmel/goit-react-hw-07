import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { setSearchTerm } = filtersSlice.actions;
export default filtersSlice.reducer;
