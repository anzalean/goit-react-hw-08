import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsOps';

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, 'Ім’я повинно містити щонайменше 3 символи')
    .max(50, 'Ім’я не може бути довшим за 50 символів')
    .required('Ім’я є обов’язковим'),
  number: Yup.string()
    .matches(/^\d+$/, 'Номер телефону має містити тільки цифри')
    .min(3, 'Номер повинен містити щонайменше 3 символи')
    .max(50, 'Номер не може бути довшим за 50 символів')
    .required('Номер є обов’язковим'),
});

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(addContact(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form className={styles.form}>
          <div className={styles.formName}>
            <label htmlFor="name">Ім’я:</label>
            <Field type="text" id="name" name="name" />
            <ErrorMessage name="name" component="div" className="error" />
          </div>

          <div className={styles.formNumber}>
            <label htmlFor="number">Номер телефону:</label>
            <Field type="text" id="number" name="number" />
            <ErrorMessage name="number" component="div" className="error" />
          </div>

          <button className={styles.formButton} type="submit">Додати контакт</button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
