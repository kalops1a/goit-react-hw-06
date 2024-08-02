import React from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Searchbox from './Searchbox';

const App = () => (
  <div>
    <h1>Phonebook</h1>
    <ContactForm />
    <h2>Contacts</h2>
    <Searchbox />
    <ContactList />
  </div>
);

export default App;