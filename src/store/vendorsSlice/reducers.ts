import type { PayloadAction } from "@reduxjs/toolkit";

import { IVendorStore } from "store/types";

export const reducers = {
  updateGeoLocation: (
    state: IVendorStore,
    action: PayloadAction<Partial<Pick<IVendorStore, "lat" | "long">>>
  ) => {
    const { lat, long } = action.payload;
    if (
      (typeof lat === "number" && lat !== state.lat) ||
      (typeof long === "number" && long !== state.long)
    ) {
      state.lat = action.payload.lat ?? state.lat;
      state.long = action.payload.long ?? state.long;
      state.vendors = [];
    }
  },

  incrementPage: (state: IVendorStore) => {
    state.page = +1;
  },
};
