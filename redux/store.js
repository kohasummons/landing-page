import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import authReducer from "./auth/authReducer";
import campaignReducer from "./campaign/campaignReducer";

const store = configureStore({
  reducer: {
    auth: authReducer,
    campaign: campaignReducer,
  },
});

const makeStore = () => store;

export const wrapper = createWrapper(makeStore);
