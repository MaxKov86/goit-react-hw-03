import { Contact } from './Contact/Contact';
import css from './ContactList.module.css';

export const ContactList = ({ contacts, filterName}) => {
 
  return (
    <ul className={css.contactList} >
      <Contact usersContacts={contacts} filter={filterName} />
    </ul>
  );
};
