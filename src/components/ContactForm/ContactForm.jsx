import css from './ContactForm.module.css';
import { Field, Form, Formik } from 'formik';
import { nanoid } from 'nanoid';

const initialValues = { name: '', phoneNumber: '' };

const ContactForm = ({ contacts, addContact }) => {
  const nameId = nanoid(9);
  const phoneNumberId = nanoid(9);

  const handleSubmit = (values, actions) => {
    addContact(() => {
      contacts.push({
        id: nanoid(9),
        name: values.name,
        number: values.phoneNumber,
      });
      return contacts;
    });
    console.log(contacts);
    console.log(values);
    actions.resetForm();
  };
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className={css.form}>
        <label htmlFor={nameId}>Name</label>
        <Field className={css.fieldName} type="text" name="name" id={nameId} />

        <label htmlFor={phoneNumberId}>Number</label>
        <Field
          className={css.fieldNumber}
          type="text"
          name="phoneNumber"
          id={phoneNumberId}
        />

        <button className={css.addBtn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
