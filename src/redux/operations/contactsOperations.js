import axios from "axios";
import { clearForm } from "../slice/contacts/contactFormSlice";
import {
  addContact,
  deleteContact,
  setContacts,
} from "../slice/contacts/contactsSlice";
import { setError } from "../slice/contacts/errorSlice";
import { loaderOff, loaderOn } from "../slice/contacts/loaderSlice";

export const getContactsOperation = () => async (dispatch) => {
  try {
    dispatch(loaderOn());
    const result = await axios.get("/contacts");

    dispatch(setContacts(result.data));
  } catch (error) {
    dispatch(setError(error));
  } finally {
    dispatch(loaderOff());
  }
};

export const addContactsOperation = (contacts) => async (dispatch) => {
  try {
    dispatch(loaderOn());
    await axios
      .post("/contacts", contacts)
      .then((data) => dispatch(addContact(data.data)));

    dispatch(clearForm());
  } catch (error) {
    dispatch(setError("Something wrong"));
  } finally {
    dispatch(loaderOff());
  }
};

export const deleteContactsOperation = (id) => async (dispatch) => {
  try {
    dispatch(loaderOn());
    await axios.delete(`/contacts/${id}`);
    dispatch(deleteContact(id));
  } catch (error) {
    dispatch(setError("Something wrong"));
  } finally {
    dispatch(loaderOff());
  }
};
