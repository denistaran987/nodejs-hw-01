import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const writeContacts = async (updatedContacts) => {
  try {
    await fs.writeFile(PATH_DB, JSON.stringify(updatedContacts));
    console.log('Data successfully saved to file.');
  } catch (e) {
    console.error('File write error:', e.message);
    throw e;
  }
};
