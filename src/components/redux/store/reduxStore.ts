import { configureStore } from "@reduxjs/toolkit";
import { filmsReducer } from "../reducers/reduxReducers";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: filmsReducer,
});

export type StoreType = ReturnType<typeof store.getState>;

export const useAppSelector: TypedUseSelectorHook<StoreType> = useSelector;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
