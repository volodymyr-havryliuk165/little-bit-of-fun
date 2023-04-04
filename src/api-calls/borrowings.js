import { apiRoute } from './helper';

export const fetchBorrowings = async () => {
  const res = await fetch(`${apiRoute}/borrowings/`).then((res) => res.json());
  return res.data;
};

export const createBorrowing = async (body) => {
  const res = await fetch(`${apiRoute}/create/borrowings/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  }).then((res) => res.json());
  return res.message;
};

export const deleteBorrowing = async (id) => {
  const res = await fetch(`${apiRoute}/delete/borrowings/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json());
  return res.message;
};
