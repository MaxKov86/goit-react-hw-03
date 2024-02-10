import { FaPhone } from 'react-icons/fa6';
import { IoPerson } from 'react-icons/io5';
import css from './Contact.module.css';

export const Contact = ({ usersContacts, filter }) => {
  return (
    <>
      {usersContacts
        .filter(user => user.name.toLowerCase().includes(filter.toLowerCase()))
        .map(({ id, name, number }) => (
          <li key={id} className={css.item}>
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
            <button className={css.button} type="button">
              Delete
            </button>
          </li>
        ))}
    </>
  );
};
