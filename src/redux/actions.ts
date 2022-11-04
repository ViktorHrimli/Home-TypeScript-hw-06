import { createSlice } from "@reduxjs/toolkit";
type State = { id: string; name: string; phone: string }[];
type Payload = { id: string; name: string; phone: string };

const contactsSliece = createSlice({
  name: "contacts",
  initialState: [],
  reducers: {
    addContacts(state: State, actions: { payload: Payload }) {
      state.push(actions.payload);
    },
    removeContacts(state: State, actions: any): any {
      return (state = state.filter(
        (item: { id: any }) => item.id !== actions.payload
      ));
    },
  },
});

const filterSlice = createSlice({
  name: "filter",
  initialState: "",
  reducers: {
    setValueFilter(state: string, actions: any) {
      return (state = actions.payload);
    },
  },
});

export const { addContacts, removeContacts } = contactsSliece.actions;
export const contactsReducer = contactsSliece.reducer;
export const filterReducer = filterSlice.reducer;
export const { setValueFilter } = filterSlice.actions;
