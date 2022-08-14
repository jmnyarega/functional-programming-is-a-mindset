import { push } from "../_internals/arrays/_push";

let mailing_list: string[] = ["asdasd", "asdasd"];

// calculations
const add_contact = (mailing_list: string[], email: string): string[] =>
  push(mailing_list, email);

// action
const submit_form_handler = (email: string) => {
  mailing_list = add_contact(mailing_list, email);
  console.log(`Adding ${email} to mailing list`);
};

const init = () => {
  submit_form_handler("emai@email.com");
  console.log(mailing_list);
};

init();
