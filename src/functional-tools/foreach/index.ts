import { forEach } from "src/_internals/arrays/_foreach";

const send_emails = (email: string) => console.log(`sending email ${email}`);

const loop_emails = (emails: string[]) => {
  forEach(emails, send_emails);
};

loop_emails(["a@email", "b@email", "c@email"]);
