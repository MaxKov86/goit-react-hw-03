import { FaPhone } from 'react-icons/fa6';
import { IoPerson } from 'react-icons/io5';
import css from './Contact.module.css';

export const Contact = ({ contactName, phoneNumber }) => {
  return (
    <>
      <li className={css.item}>
        <div className={css.itemInfoContainer}>
          <p className={css.text}>
            <IoPerson className={css.iconPerson} />
            {contactName}
          </p>
          <p className={css.text}>
            <FaPhone className={css.iconPhone} />
            {phoneNumber}
          </p>
        </div>
        <button className={css.button} type="button">
          Delete
        </button>
      </li>
    </>
  );
};
