import { createSlice } from "@reduxjs/toolkit";
const initialState=[]

const contactsSlice=createSlice({
    name:"contacts",
    initialState,
    reducers:{
        addContact(state,action){
            return [...state, action.payload]
        },
        setContacts(state,action){
            return action.payload
        },
        deleteContact(state,action){
            return [...state.filter((contact) => contact.id !== action.payload)]
        },
        

    }
})

const {actions,reducer} = contactsSlice
export const{addContact,setContacts,deleteContact}=actions

export default reducer













// import { ADD_CONTACT, DELETE_CONTACT, SET_CONTACTS } from "../constant";

// const initialState = [];

// const contactsReducer = (state = initialState, { type, payload }) => {
//   switch (type) {
//     case ADD_CONTACT:
//       return [...state, payload];
//       case SET_CONTACTS:
//         return payload

//     case DELETE_CONTACT:
//       return [...state.filter((contact) => contact.id !== payload)];
//     default:
//       return state;
//   }
// };

// export default contactsReducer;

// import { ADD_CONTACT, DELETE_CONTACT, SET_CONTACTS } from "../constant";

// export const addContact = (payload) => ({
//   type: ADD_CONTACT,
//   payload: { ...payload },
// });

// export const setContacts = (payload) => ({
//   type: SET_CONTACTS,
//   payload,
// });
// export const deleteContact = (payload) => ({
//   type: DELETE_CONTACT,
//   payload,
// });
