import { FaPhone } from 'react-icons/fa6';
import { IoPerson } from 'react-icons/io5';
import css from './Contact.module.css';

const Contact = ({ id, name, number, allContacts, deleteContact }) => {
	const handleRemoveClick = e => {
		deleteContact(() => {
			return allContacts.filter(contact => contact.id !== e.target.id);
		});

		console.log(allContacts);
	};
	return (
		<>
			<li className={css.item} onClick={handleRemoveClick}>
				<div className={css.itemInfoContainer}>
					<p className={css.text}>
						<IoPerson className={css.iconPerson} />
						{name}
					</p>
					<p className={css.text}>
						<FaPhone className={css.iconPhone} />
						{number}
					</p>
				</div>
				<button id={id} className={css.button} type="button">
					Delete
				</button>
			</li>
		</>
	);
};
export default Contact;
