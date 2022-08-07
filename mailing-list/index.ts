const mailing_list: string[] = [];

// calculations
const add_element_last = (array: any[], element: any) => {
  const copy_array = array.slice();
  copy_array.push(element);
  return copy_array;
};

// calculations
const add_contact = (mailing_list: string[], email: string): string[] =>
  add_element_last(mailing_list, email);

// action
const submit_form_handler = (email: string) => {
  add_contact(mailing_list, email);
  console.log(`Adding ${email} to mailing list`);
};
