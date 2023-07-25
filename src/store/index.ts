//RTK QUERY
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

//REDUCERS
import { vendorsReducer } from "./vendorsSlice";

const store = configureStore({
  reducer: {
    vendors: vendorsReducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware();
  },
});

setupListeners(store.dispatch);

export default store;

//TYPES
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export * from "./types";

//REDUCERS
export * from "./vendorsSlice/index";

//THUNKS
export * from "./thunks/vendors";

//HOOKS
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
