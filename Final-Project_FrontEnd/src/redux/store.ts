import { PayloadAction, configureStore } from "@reduxjs/toolkit";

import { useDispatch } from "react-redux";
import { UserState, userReducer } from "./userSlice";
import { AppState, appReducer } from "./appSlice";

export interface IRootState {
  user: UserState;
  app: AppState;
}

const store = configureStore<IRootState>({
  reducer: {
    user: userReducer,
    app: appReducer,
  },
  middleware: (getDefaultMiddleware: any) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export default store;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch; // Export a hook that can be reused to resolve types
