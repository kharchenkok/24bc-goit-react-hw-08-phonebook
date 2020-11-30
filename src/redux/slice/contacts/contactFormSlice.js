import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  number: "",
};

const contactFormSlice = createSlice({
  name: "formContact",
  initialState,
  reducers: {
    getContactFormValue(state, action) {
      const { name, value } = action.payload;
      return { ...state, [name]: value };
    },
    clearForm(state, action) {
      return initialState;
    },
  },
});

const {actions,reducer} = contactFormSlice
export const{getContactFormValue,clearForm}=actions

export default reducer


