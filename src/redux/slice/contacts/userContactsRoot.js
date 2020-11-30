import { combineReducers } from "redux";

import contactFormSlice from "./contactFormSlice";
import contactsSlice from "./contactsSlice";
import errorSlice from "./errorSlice";
import filterSlice from "./filterSlice";
import loaderSlice from "./loaderSlice";



const userContactsRoot=combineReducers({
    contacts:contactsSlice,
    filter:filterSlice,
    formContact:contactFormSlice,
    error:errorSlice,
    loader:loaderSlice,
    
})

export default userContactsRoot