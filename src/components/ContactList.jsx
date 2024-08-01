import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts, deleteContact } from '../redux/contactsSlice';
import { selectNameFilter } from '../redux/filtersSlice';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);

  if (!Array.isArray(contacts)) {
    console.error('Contacts should be an array');
    return null;
  }

  if (typeof filter !== 'string') {
    console.error('Filter should be a string');
    return null;
  }

  const filteredContacts = contacts.filter(contact => {
    if (typeof contact.name === 'string') {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    } else {
      console.error(`Expected contact.name to be a string, but got ${typeof contact.name}`);
      return false;
    }
  });

  return (
    <ul>
      {filteredContacts.map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.number}
          <button onClick={() => dispatch(deleteContact(contact.id))}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;