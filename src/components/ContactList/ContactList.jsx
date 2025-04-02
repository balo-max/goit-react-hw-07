import css from './ContactList.module.css'

import Contact from '../Contact/Contact'
import { useSelector } from 'react-redux';

const filtredContacts = (contacts, searchFilter) => {
    const filterContacts = contacts.filter(contact => contact.name.toLowerCase().includes(searchFilter.toLowerCase()));
    return filterContacts;
}

export default function ContactList() {
    const contacts = useSelector((state) => state.contacts.items);
    const searchContact = useSelector(state => state.filters.name);
    const visibleContacts = filtredContacts(contacts, searchContact);

    return (
        <ul className={css.contactList}>
            {visibleContacts.map(contact =>
                <li className={css.contactItem} key={contact.id}>
                    <Contact contact={contact}/>
                </li>
            )}
        </ul>
    );
}