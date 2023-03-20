import aushInstance from './auth';

export const getAllContacts = () => aushInstance.get('/contacts');

export const deleteContact = id => aushInstance.delete(`/contacts/${id}`);

export const addContact = data => aushInstance.post('/contacts', data);
