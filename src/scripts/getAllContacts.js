import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    return JSON.parse(await readContacts());
  } catch (e) {
    console.error(e.message);
  }
};

console.log(await getAllContacts());
