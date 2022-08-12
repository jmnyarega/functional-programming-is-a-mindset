export const filter = (array: string | any[], f: (arg: any) => boolean) => {
  let new_array = [];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (f(element)) new_array.push(element);
  }
  return new_array;
};

const isTruthy = (arg: any) => arg;
const isFalsey = (arg: any) => !arg;
const emails = [
  "andrew@email",
  "borison@email",
  "calvin@email",
  "ed@email",
  null,
  undefined,
  "",
];

const get_emails = (email: string): boolean => isTruthy(email);
const get_nulls = (email: string): boolean => isFalsey(email);

const filter_emails = (emails: any[]) => filter(emails, get_emails);
const filter_nulls = (emails: any[]) => filter(emails, get_nulls);

console.log(filter_emails(emails));
console.log(filter_nulls(emails));
