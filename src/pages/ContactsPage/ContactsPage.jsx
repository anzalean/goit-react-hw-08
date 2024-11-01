import ContactList from '../../components/ContactList/ContactList';
import ContactForm from '../../components/ContactForm/ContactForm';
import SearchBox from '../../components/SearchBox/SearchBox';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/contacts/operations';
import { selectFilteredContacts, selectLoading, selectError } from '../../redux/contacts/selectors';

const ContactsPage = () => {
const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

    return (
        <div>
            <h1>Phonebook</h1>
            <ContactForm />
            <SearchBox />
            {isLoading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            <ContactList contacts={contacts} />
        </div>
    );
}
export default ContactsPage;
