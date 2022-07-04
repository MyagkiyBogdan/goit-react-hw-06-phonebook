import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const initialState = {
  items: INITIAL_STATE,
  filter: '',
};

export const contactsSlice = createSlice({
  name: 'contacts',

  initialState,
  reducers: {
    addContact(state, action) {
      // For deal array of contacts in lower case
      const allContacts = state.items.reduce((acc, contact) => {
        acc.push(contact.name.toLocaleLowerCase());
        return acc;
      }, []);

      // Check if the contact is already in the contact list
      if (allContacts.includes(action.payload.name.toLocaleLowerCase())) {
        alert(`${action.payload.name} already in contacts.`);

        return state;
      }

      const newContact = action.payload;
      console.log('newContact', newContact);
      console.log('state.items', state.items);
      state.items = [...state.items, newContact];
    },

    deleteContact(state, action) {
      state.items = state.items.filter(
        contact => contact.id !== action.payload
      );
    },
    updateFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { addContact, deleteContact, updateFilter } =
  contactsSlice.actions;
// Что бы при изменении внешенго вида стетай или свойст не приходилось руками менять в каждом файле
export const getContacts = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;

// contactsSlice.actions и contactsSlice.reducer возвращает сам медот createSlice
