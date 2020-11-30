import React, { useEffect } from "react";
import { useDispatch} from "react-redux";

import {
  getContactsOperation,
} from "../../redux/operations/contactsOperations";
import ContactForm from "../contactForm/ContactForm";
import ContactList from "../contactList/ContactList";
import Filter from "../filter/Filter";


// ===================================================================

const Phonebook = () => {
  // const loader=useSelector(state=>state.loader)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsOperation());
  }, [dispatch]);

  return (
    <>
      <ContactForm />
      <Filter />
      <ContactList />
    </>
  );
};

export default Phonebook;
