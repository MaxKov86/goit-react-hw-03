import { useState, useEffect } from 'react';
import ContactList from './ContactList/ContactList';
import SearchBar from './SearchBox/SearchBox';
import ContactForm from './ContactForm/ContactForm';

const App = () => {
	const [contacts, setContacts] = useState(() => {
		const savedContacts = window.localStorage.getItem('saved-contacts');

		if (savedContacts !== null) {
			return JSON.parse(savedContacts);
		}
		return [
			{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
			{ id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
			{ id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
			{ id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
		];
	});

	const [filterValue, setFilter] = useState('');

	useEffect(() => {
		window.localStorage.setItem('saved-contacts', JSON.stringify(contacts));
	}, [contacts]);

	const filteredContacts = contacts.filter(contact =>
		contact.name.toLowerCase().includes(filterValue.toLowerCase())
	);

	const removeContact = (array, id) => {
		setContacts(() => {
			return array.filter(arr => arr.id !== id);
		});
	};

	return (
		<>
			<h1>Phonebook</h1>
			<ContactForm contacts={contacts} addContact={setContacts} />
			<SearchBar value={filterValue} onChange={setFilter} />
			<ContactList contacts={filteredContacts} removeContact={removeContact} />
		</>
	);
};

export default App;
