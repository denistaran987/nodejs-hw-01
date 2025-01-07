import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  try {
    await writeContacts([]);
    console.log('All contacts have been removed from the DataBase.');
  } catch (e) {
    console.log(e.message);
  }
};

removeAllContacts();
