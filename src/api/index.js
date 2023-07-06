import axios from 'axios';

// import {API_URL} from '@env';

const client = axios.create({
  // baseURL: API_URL,
  baseURL: 'https://contact.herokuapp.com',
  timeout: 10000,
});

const clientImage = axios.create({
  baseURL: 'https://apis.linx.chat',
  timeout: 10000,
});

const createHeader = () => {
  return {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
};

const createHeaderForm = () => {
  return {
    headers: {
      'Content-Type': 'multipart/form-data',
      'x-access-token':
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjhlOWRhN2Y1LTU1NzgtNDJjYi1hNjFhLTNkNDdkMmE0YTQ2MSIsImVtYWlsIjoidGVzdGluZzNAZ21haWwuY29tIiwidXNlcm5hbWUiOiJ0ZXN0aW5nIDMiLCJpYXQiOjE2ODc2ODAxMTZ9.DZ88_9hNQrBrO1Xcr3E59elbvtjVjAoqd2a33YvgL2Y',
    },
  };
};

export {client, clientImage, createHeader, createHeaderForm};
