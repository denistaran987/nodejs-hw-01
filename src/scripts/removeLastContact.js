import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const data = JSON.parse(await readContacts());
    if (!data.length) return console.log(data);
    data.pop();
    await writeContacts(data);
    console.log(`${data.length} contacts in DataBase`);
  } catch (e) {
    console.log(e.message);
  }
};

removeLastContact();
