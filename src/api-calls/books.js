import { apiRoute } from './helper';

export const fetchBooks = async () => {
  const res = await fetch(`${apiRoute}/books/`).then((res) => res.json());
  return res.data;
};

export const createBook = async (body) => {
  const res = await fetch(`${apiRoute}/create/books/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  }).then((res) => res.json());
  return res.message;
};

export const deleteBook = async (sifpher, prod_code) => {
  const res = await fetch(`${apiRoute}/delete/books/${sifpher}&${prod_code}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json());
  return res.message;
};
