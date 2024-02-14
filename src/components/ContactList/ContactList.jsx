import Contact from './Contact/Contact';
import css from './ContactList.module.css';

const ContactList = ({ contacts, onRemoveContact }) => {
	return (
		<ul className={css.contactList}>
			{contacts.map(({ id, name, number }) => (
				<Contact
					key={id}
					id={id}
					name={name}
					number={number}
					// allContacts={contacts}
					deleteContact={onRemoveContact}
				/>
			))}
		</ul>
	);
};
export default ContactList;
