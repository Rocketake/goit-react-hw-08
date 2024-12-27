import { Formik, Form, Field, ErrorMessage } from 'formik';

import * as Yup from 'yup';
import s from "./ContactForm.module.css"

import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';

const ContactForm = () => {
	const dispatch = useDispatch()

	const handleSubmit = (values, options) => {

		dispatch(addContact({...values}))
		options.resetForm()
}

	const initialValues = {
		name: "",
		number: ""
	}

	const contactSchema = Yup.object().shape({
		name: Yup.string().min(3, "занадто коротке ім'я!").max(50, "ім'я задовге!").required("обов'язкове поле!"),
		number: Yup.string().min(10, "номер закороткий").required("обов'язкове поле!")
	})
	
   return (
	   <div>
		   <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={contactSchema}>
			   <Form className={s.form}>
				   <label className={s.label}>
					   <span>Name</span>
					   <Field name="name"></Field>
					   <ErrorMessage name='name' component='span' className={s.error}/>
				   </label>
				    <label className={s.label}>
					   <span>Number</span>
					   <Field name='number'></Field>
					   <ErrorMessage name='number' component='span' className={s.error}/>
				   </label>
				   <button type='submit'>Add contact</button>
			   </Form>
		   </Formik>
	   </div>
	
   )
 }
 
 export default ContactForm