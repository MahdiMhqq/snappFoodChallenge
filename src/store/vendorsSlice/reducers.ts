import type { PayloadAction } from "@reduxjs/toolkit";

import { IVendorStore } from "store/types";

export const reducers = {
  updateGeoLocation: (
    state: IVendorStore,
    action: PayloadAction<Pick<IVendorStore, "lat" | "long">>
  ) => {
    state.lat = action.payload.lat;
    state.long = action.payload.long;
  },

  incrementPage: (state: IVendorStore) => {
    state.page = +1;
  },
};
