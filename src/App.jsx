import React from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Searchbox from './components/Searchbox';

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