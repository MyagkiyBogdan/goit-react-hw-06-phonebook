import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const itemsSlice = createSlice({
  name: 'items',
  initialState: JSON.parse(localStorage.getItem('contacts')) ?? [
    ...INITIAL_STATE,
  ],
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
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

// Что бы при изменении внешенго вида стетай или свойст не приходилось руками менять в каждом файле
export const getContacts = state => state.items;
export const { addContact, deleteContact } = itemsSlice.actions;

// itemsSlice.actions и itemsSlice.reducer возвращает сам медот createSlice
