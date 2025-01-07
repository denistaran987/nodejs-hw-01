import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const readContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB);
    return data;
  } catch (e) {
    console.error('Can not read file:', e.message);
    throw e;
  }
};
