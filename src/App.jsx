import React from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Searchbox from './components/Searchbox';

const App = () => (
  <div>
    <h1>Phonebook</h1>
    <ContactForm />
    <Searchbox />
    <ContactList />
  </div>
);

export default App;