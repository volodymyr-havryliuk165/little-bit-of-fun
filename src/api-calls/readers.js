import { apiRoute } from './helper';

export const fetchReaders = async () => {
  const res = await fetch(`${apiRoute}/readers/`).then((res) => res.json());
  return res.data;
};

export const createReader = async (body) => {
  const res = await fetch(`${apiRoute}/create/readers/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  }).then((res) => res.json());
  return res.message;
};

export const deleteReader = async (id) => {
  const res = await fetch(`${apiRoute}/delete/readers/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json());
  return res.message;
};
