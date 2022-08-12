export const map = (array: any[], f: (arg: any) => void) => {
  let new_array = [];

  for (let i = 0; i < array.length; i++) {
    new_array.push(f(array[i]));
  }

  return new_array;
};

const users = (email: string) => ({
  email,
  name: email.split("@")[0],
});

function loop_emails(emails: string[]) {
  const obj = map(emails, users);
  console.log(obj);
}

loop_emails(["annie@email", "boy@email", "caleb@email"]);
