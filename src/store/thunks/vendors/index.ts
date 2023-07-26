import { createAsyncThunk } from "@reduxjs/toolkit";

import API from "store/api";

import { AxiosError, type AxiosResponse } from "axios";
import type { RootState } from "store";
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
    let strError = "";

    if (error instanceof AxiosError) {
      console.log("axios", error);
      if (typeof error.response?.data?.error === "string")
        strError = error.response?.data?.error;
      else strError = error.message;
    } else if (typeof error === "string") {
      strError = error;
    } else if (typeof error === "object") {
      strError = JSON.stringify(error);
    } else strError = "unknown";

    return rejectWithValue(strError);
  }
});

export { fetchVendors };
