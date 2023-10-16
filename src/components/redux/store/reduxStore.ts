import { configureStore } from "@reduxjs/toolkit";
import { filmsReducer } from "../reducers/reduxReducers";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { authReducer } from "../reducers/authReducer";
import { personReducer } from "../reducers/personReducer";
import { findDataReducer } from "../reducers/findReducer";
import { findPremiumDataReducer } from "../reducers/premiumSliderReducer";

export const store = configureStore({
  reducer: {
    films: filmsReducer,
    auth: authReducer,
    person: personReducer,
    find: findDataReducer,
    findPremium: findPremiumDataReducer,
  },
});

export type StoreType = ReturnType<typeof store.getState>;

export const useAppSelector: TypedUseSelectorHook<StoreType> = useSelector;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
