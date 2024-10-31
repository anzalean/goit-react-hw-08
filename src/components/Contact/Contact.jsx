import styles from './Contact.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <li className={styles.contact}>
      <div>
        <p className={styles.contactId}>{id}</p>
        <p>{name}</p>
        <p>{number}</p>
      </div>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default Contact;
