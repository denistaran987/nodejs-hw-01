import { readContacts } from '../utils/readContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  try {
    const data = JSON.parse(await readContacts());
    data.push(createFakeContact());
    await writeContacts(data);
  } catch (e) {
    console.error('Error in adding or saving contacts:', e.message);
  }
};

addOneContact();
