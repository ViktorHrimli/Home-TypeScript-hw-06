import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer, filterReducer } from "./actions";

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
