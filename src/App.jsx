import ContactList from './components/ContactList/ContactList'
import SearchBox from './components/SearchBox/SearchBox';
import ContactForm from './components/ContactForm/ContactForm';
import './App.css'
import SyncLoader from "react-spinners/SyncLoader";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from './redux/contactsOps';
import { selectContacts, selectError, selectLoading } from './redux/contactsSlice';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';

function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <ContactForm />
      <SearchBox />
      {loading && <SyncLoader />}
      {error ? <ErrorMessage /> : contacts?.length > 0 && <ContactList />}
    </>
  )
}

export default App