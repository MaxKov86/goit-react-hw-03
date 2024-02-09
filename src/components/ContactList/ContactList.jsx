// import { Contact } from './Contact/Contact';
import css from './ContactList.module.css';

export const ContactList = ({ children }) => {
  return <ul className={css.contactList}>{children}</ul>;
};
