import { Contact } from './Contact/Contact';
import css from './ContactList.module.css';

export const ContactList = ({ contacts, filterName, removeContact }) => {
	return (
		<ul className={css.contactList}>
			{contacts
				.filter(contact =>
					contact.name.toLowerCase().includes(filterName.toLowerCase())
				)
				.map(({ id, name, number }) => (
					<Contact
						key={id}
						id={id}
						name={name}
						number={number}
						allContacts={contacts}
						deleteContact={removeContact}
					/>
				))}
		</ul>
	);
};
