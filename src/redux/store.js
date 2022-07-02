import { configureStore } from '@reduxjs/toolkit';
import { itemsSlice } from './itemsSlice';
import { filterSlice } from './filterSlice';

export const store = configureStore({
  reducer: {
    items: itemsSlice.reducer,
    filter: filterSlice.reducer,
  },
});

// createReducer

// export const addContact = createAction('contacts/addContact');
// export const deleteContact = createAction('contacts/deleteContact');
// export const updateFilter = createAction('filter/updateFilter');

// const itemsReducer = createReducer(
//   // initialState
//   JSON.parse(localStorage.getItem('contacts')) ?? [...INITIAL_STATE],
//   {
//     [addContact]: (state, action) => {
//       // For deal array of contacts in lower case

//       const allContacts = state.reduce((acc, contact) => {
//         acc.push(contact.name.toLocaleLowerCase());
//         return acc;
//       }, []);

//       // Check if the contact is already in the contact list
//       if (allContacts.includes(action.payload.name.toLocaleLowerCase())) {
//         alert(`${action.payload.name} already in contacts.`);

//         return state;
//       }

//       const newContact = action.payload;
//       return [...state, newContact];
//     },

//     [deleteContact]: (state, action) =>
//       state.filter(contact => contact.id !== action.payload),
//   }
// );

// const filterReducer = createReducer('', {
//   [updateFilter]: (state, action) => {
//     return action.payload;
//   },
// });
