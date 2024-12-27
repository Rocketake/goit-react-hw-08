import { Field, Form, Formik } from 'formik';
import s from './RegisterForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../redux/auth/operations';
import { Navigate} from 'react-router-dom';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

const RegisterForm = () => {
  const dispatch = useDispatch();
	const isLoggedIn = useSelector(selectIsLoggedIn);
  const handleSubmit = (values, options) => {
    dispatch(register(values))
    options.resetForm();
  };
  const initialValues = {
    name: '',
    email: '',
    password: '',
	};
	
	if (isLoggedIn) {
    return <Navigate to='/tasks' />;
  }
  return (
    <div className={s.wrapper}>
      <h2>Register</h2>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form className={s.form}>
          <Field name='name' placeholder='Name' />
          <Field name='email' placeholder='Email' />
          <Field name='password' type='password' placeholder='Enter pass' />
          <button type='submit'>Submit</button>
        </Form>
      </Formik>
    </div>
  );
};
export default RegisterForm;