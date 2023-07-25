import { createSlice } from "@reduxjs/toolkit";

import { IVendorStore } from "store/types";
import { reducers } from "./reducers";

import { fetchVendors } from "store/thunks/vendors";

const vendorsInitialState: IVendorStore = {
  lat: 35.753,
  long: 51.328,
  page: 0,
  page_size: 10,
  vendors: [],
  loading: false,
  err: null,
  hasNextPage: true,
};

const vendorsSlice = createSlice({
  initialState: vendorsInitialState,
  name: "vendors",
  reducers: { ...reducers },
  extraReducers(builder) {
    // fetch vendors
    builder
      .addCase(fetchVendors.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchVendors.rejected, (state, { error }) => {
        state.loading = false;
        state.err = error.message?.toString() ?? null;
      })
      .addCase(fetchVendors.fulfilled, (state, { payload }) => {
        const newVendors = [...state.vendors, ...payload.data.finalResult];
        state.vendors = newVendors;
        state.loading = false;
        state.err = null;
        state.hasNextPage = payload.data.count > newVendors.length;
      });
  },
});

export const { updateGeoLocation, incrementPage } = vendorsSlice.actions;
export const vendorsReducer = vendorsSlice.reducer;
