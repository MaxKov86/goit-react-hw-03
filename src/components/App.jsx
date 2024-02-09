import { useState } from 'react';
import { ContactList } from './ContactList/ContactList';
import { SearchBar } from './SearchBar/SearchBar';
import { Contact } from './ContactList/Contact/Contact';
const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filterValue, setFilter] = useState('');

  return (
    <>
      <h1>Phonebook</h1>
      <SearchBar value={filterValue} onChange={setFilter} />
      <ContactList contacts={contacts}>
        {contacts.map(({ id, name, number }) => (
          <Contact key={id} contactName={name} phoneNumber={number} />
        ))}
      </ContactList>
    </>
  );
};

export default App;
