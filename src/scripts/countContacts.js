import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  try {
    const data = await readContacts();
    const contacts = JSON.parse(data);
    const dataLength = contacts.length;
    console.log(`${dataLength} contacts in DataBase`);
    return dataLength;
  } catch (e) {
    console.error(e.message);
  }
};

console.log(await countContacts());
