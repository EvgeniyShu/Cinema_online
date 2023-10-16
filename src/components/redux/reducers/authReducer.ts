import { createSlice } from "@reduxjs/toolkit";

export interface InitialAuthStateProps {
  user: { email: string; token: string; password: string; id: string };
}

const initialState = { user: { email: "", token: "", password: "", id: "" } };

export const authSlice = createSlice({
  name: "authData",
  initialState,
  reducers: {
    setUser(state, action) {
      state.user.email = action.payload.email;
      state.user.password = action.payload.password;
      state.user.token = action.payload.token;
      state.user.id = action.payload.id;
    },
    removeUser(state) {
      state.user.email = "";
      state.user.password = "";
      state.user.token = "";
      state.user.id = "";
    },
  },
});

export const { setUser, removeUser } = authSlice.actions;

export const authReducer = authSlice.reducer;
