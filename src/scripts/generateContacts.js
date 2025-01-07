import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  try {
    const data = JSON.parse(await readContacts());
    const newContacts = Array.from({ length: number }, () =>
      createFakeContact(),
    );
    data.push(...newContacts);
    await writeContacts(data);
    console.log(`${number} contacts successfully generated and saved.`);
  } catch (e) {
    console.error('Error in generating or saving contacts:', e.message);
  }
};

generateContacts(3);
