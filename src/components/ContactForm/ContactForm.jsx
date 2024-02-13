import css from './ContactForm.module.css';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';

const FeedbackSchema = Yup.object().shape({
	name: Yup.string()
		.min(3, <span className={css.error}>Too Short!</span>)
		.max(50, <span className={css.error}>Too Long!</span>)
		.required(<span className={css.error}>Required</span>),
	phoneNumber: Yup.string()
		.min(3, <span className={css.error}>Too Short!</span>)
		.max(50, <span className={css.error}>Too Long!</span>)
		.required(<span className={css.error}>Required</span>),
});

const initialValues = { name: '', phoneNumber: '' };

const ContactForm = ({ contacts, addContact }) => {
	const nameId = nanoid(9);
	const phoneNumberId = nanoid(9);

	const handleSubmit = (values, actions) => {
		addContact(() => {
			return (contacts = [
				...contacts,
				{ id: nanoid(9), name: values.name, number: values.phoneNumber },
			]);
		});
		actions.resetForm();
	};
	return (
		<Formik
			initialValues={initialValues}
			onSubmit={handleSubmit}
			validationSchema={FeedbackSchema}
		>
			<Form className={css.form}>
				<label htmlFor={nameId}>Name</label>
				<Field
					onFocus={focus}
					className={css.fieldName}
					type="text"
					name="name"
					id={nameId}
				/>

				<ErrorMessage className={css.error} name="name" as="span" />

				<label className={css.labelNumber} htmlFor={phoneNumberId}>
					Number
				</label>
				<Field
					className={css.fieldNumber}
					type="tel"
					name="phoneNumber"
					id={phoneNumberId}
				/>

				<ErrorMessage className={css.error} name="phoneNumber" as="span" />

				<button className={css.addBtn} type="submit">
					Add contact
				</button>
			</Form>
		</Formik>
	);
};

export default ContactForm;
