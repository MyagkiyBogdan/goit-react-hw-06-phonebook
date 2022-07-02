import { createSlice } from '@reduxjs/toolkit';
export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    updateFilter(state, action) {
      return action.payload;
    },
  },
});

export const getFilter = state => state.filter;
export const { updateFilter } = filterSlice.actions;