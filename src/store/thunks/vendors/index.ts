import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { RootState } from "store";

import API from "store/api";

import type { IVendorGetParams, VendorListRequestResult } from "types";

const fetchVendors = createAsyncThunk<
  VendorListRequestResult,
  Partial<IVendorGetParams>
>("vendors/get", async (args, { getState, rejectWithValue }) => {
  const store = getState() as RootState;
  const { vendors, hasNextPage, loading, ...storeArgs } = store.vendors;

  try {
    const res = await API.get<any, AxiosResponse<VendorListRequestResult>>(
      "/vendors-list",
      {
        params: { ...storeArgs, ...args },
      }
    );
    return res.data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export { fetchVendors };
