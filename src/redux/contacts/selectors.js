import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.contacts;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectStatusFilter = state => state.filter.filter;

//Додати селектор по фільтру createSelector
export const selectFilteredContacts = createSelector([selectContacts, selectStatusFilter], (contacts, filter) => {
  return filter.length > 0 ? contacts.filter(item => item.name.toLowerCase().includes(filter.toLowerCase())) : contacts;
});
