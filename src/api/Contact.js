import {client, clientImage, createHeader, createHeaderForm} from './index';

export const getContactAPI = () => client.get('/contact');

export const getContactByIdAPI = id => client.get(`/contact/${id}`);

export const createContactAPI = data =>
  client.post('/contact', data, createHeader());

export const updateContactAPI = (data, id) =>
  client.put(`/contact/${id}`, data, createHeader());

export const deleteContactAPI = id => client.delete(`/contact/${id}`);

export const uploadAPI = data =>
  clientImage.post('/upload-image', data, createHeaderForm());
