export const qs = (sel, el = document) => el.querySelector(sel);
export const qsa = (sel, el = document) => Array.from(el.querySelectorAll(sel));
export const setClick = (sel, fn) => qs(sel)?.addEventListener('click', fn);
export const getFormData = form => Object.fromEntries(new FormData(form).entries());

export const storage = {
  get: key => JSON.parse(localStorage.getItem(key) || 'null'),
  set: (key, value) => localStorage.setItem(key, JSON.stringify(value))
};
