import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import authReducer from "./auth/authReducer";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

const makeStore = () => store;

export const wrapper = createWrapper(makeStore);
