import { generateRandomId } from '@nest-nx/utils/helpers';

console.log('Hello World!');
const id = generateRandomId();
const now = new Date();
const formattedNow = Intl.DateTimeFormat('zh-TW').format(now);
console.log(`${id}, Hi there.
It's ${formattedNow}`);
