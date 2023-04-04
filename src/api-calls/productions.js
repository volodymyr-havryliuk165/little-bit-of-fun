import { apiRoute } from './helper';

export const fetchProductions = async () => {
  const res = await fetch(`${apiRoute}/productions/`).then((res) => res.json());
  return res.data;
};

export const createProduction = async (body) => {
  const res = await fetch(`${apiRoute}/create/productions/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  }).then((res) => res.json());
  return res.message;
};

export const deleteProduction = async (id) => {
  const res = await fetch(`${apiRoute}/delete/productions/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json());
  return res.message;
};
