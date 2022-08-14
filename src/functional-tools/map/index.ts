import { map } from "src/_internals/arrays/_map";

const users = (email: string) => ({
  email,
  name: email.split("@")[0],
});

function loop_emails(emails: string[]) {
  const obj = map(emails, users);
  console.log(obj);
}

loop_emails(["annie@email", "boy@email", "caleb@email"]);
