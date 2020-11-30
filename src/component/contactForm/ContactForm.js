import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import EmptyNameAlert from "../alert/EmptyNameAlert";
import ExsistNameAlert from "../alert/ExsistNameAlert";
import { addContactsOperation } from "../../redux/operations/contactsOperations";
import { contactsSelector, formContactSelector } from "../../redux/selectors/contactsSelector";
import { getContactFormValue } from "../../redux/slice/contacts/contactFormSlice";

import TextField from "@material-ui/core/TextField";
import SaveIcon from "@material-ui/icons/Save";
import { Button } from "@material-ui/core";

import style from "./ContactForm.module.css";
// =======================================================================
const ContactForm = () => {
  const formContact = useSelector((state) => formContactSelector(state));
  const contacts = useSelector((state) => contactsSelector(state));

  const [alertEmpty, setAlertEmpty] = useState(false);
  const [alertExists, setAlertExists] = useState(false);

  const dispatch = useDispatch();

  const handleFormSubmit = (e) => {
    const { name, number } = formContact;
    e.preventDefault();

    if (name.length === 0 || number.length === 0) {
      setAlertEmpty(true);
      setTimeout(() => setAlertEmpty(false), 1500);
      return;
    }

    if (contacts.some((el) => el.name.toLowerCase() === name.toLowerCase())) {
      setAlertExists(true);
      setTimeout(() => setAlertExists(false), 1500);
      return;
    }

dispatch(addContactsOperation({name, number}))

  };
  
  const handleChange = ({ target }) => {
    dispatch(getContactFormValue(target));
   
  };

  return (
    <>
      <EmptyNameAlert
        alert={alertEmpty}
        field={formContact.name.length ? "Number" : "Name"}
      />
      <ExsistNameAlert alert={alertExists} />
  
      <form
        className={style.form__style}
        noValidate
        autoComplete="off"
        onSubmit={handleFormSubmit}
      >
        <TextField
          id="standard-basic"
          label="Name"
          name="name"
          type="text"
          value={formContact.name}
          onChange={handleChange}
          required
        />

        <TextField
          id="standard-basic"
          label="Number"
          name="number"
          type="tel"
          value={formContact.number}
          onChange={handleChange}
          placeholder="38-0XX-XXX-XX-XX"
          pattern="[0-9]{2}-[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}"
          required
        />
        <Button
          variant="contained"
          color="default"
          size="large"
          startIcon={<SaveIcon />}
          type="submit"
        >
          Save
        </Button>
      </form>
    </>
  );
};

export default ContactForm;
