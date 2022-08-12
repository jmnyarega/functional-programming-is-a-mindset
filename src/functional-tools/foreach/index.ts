export const forEach = (array: string | any[], f: (arg: any) => void) => {
  for (let i = 0; i < array.length; i++) {
    f(array[i]);
  }
};

const send_emails = (email: string) => console.log(`sending email ${email}`);

function loop_emails(emails: string[]) {
  forEach(emails, send_emails);
}

loop_emails(["a@email", "b@email", "c@email"]);
