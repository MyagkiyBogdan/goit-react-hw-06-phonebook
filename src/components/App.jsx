import { useEffect } from 'react';

import ContactForm from './ContactForm';
import ContactList from './ContactList';
import EmptyMessage from './EmptyMessage';
import Filter from './Filter';
import { useSelector } from 'react-redux';

export function App() {
  const contacts = useSelector(state => state.items);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="wrapper">
      <div className="header-section">
        <h1>Phonebook</h1>
      </div>
      <div className="main-section">
        <ContactForm />
        <div className="contacts-secton">
          <h2 className="page-title">Your contacts</h2>
          {contacts.length > 0 ? (
            <>
              <Filter />

              <ContactList />
            </>
          ) : (
            <EmptyMessage />
          )}
        </div>
      </div>
    </div>
  );
}
