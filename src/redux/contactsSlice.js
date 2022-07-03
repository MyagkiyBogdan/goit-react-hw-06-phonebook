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
  // initialState: JSON.parse(localStorage.getItem('contacts')) ?? [
  // 	...INITIAL_STATE,
  initialState,
  reducers: {
    addContact(state, action) {
      // For deal array of contacts in lower case

      const allContacts = state.reduce((acc, contact) => {
        acc.push(contact.name.toLocaleLowerCase());
        return acc;
      }, []);

      // Check if the contact is already in the contact list
      if (allContacts.includes(action.payload.name.toLocaleLowerCase())) {
        alert(`${action.payload.name} already in contacts.`);

        return state;
      }

      const newContact = action.payload;
      return [...state, newContact];
    },

    deleteContact(state, action) {
      console.log(state.items);
      console.log(action);
      return state.items.filter(contact => contact.id !== action.payload);
    },
    updateFilter(state, action) {
      return action.payload;
    },
  },
});

export const getContacts = state => state.contacts.items;
export const { addContact, deleteContact, updateFilter } =
  contactsSlice.actions;

export const getFilter = state => state.contacts.filter;

// Что бы при изменении внешенго вида стетай или свойст не приходилось руками менять в каждом файле

// itemsSlice.actions и itemsSlice.reducer возвращает сам медот createSlice
