import { reduce } from "src/_internals/arrays/_reduce";
import { object_set } from "src/_internals/object/_set";

const emails_obj = (
  obj: { [x: string]: string },
  email: string,
  index: string
) => object_set(obj, index, email);
const get_obj = (emails: string[]) => reduce(emails, emails_obj, {});

const obj = get_obj(["a@email", "b@email", "c@email"]);
console.log(obj);

const sum = reduce([1, 2, 3, 4], (a, b) => a + b, 0);
const avg = reduce([1, 2, 3, 4], (a, b) => a + b, 0) / 4;
const product = reduce([1, 2, 3, 4], (a, b) => a * b, 1);
const min = reduce([1, 2, -4, 4], (a, b) => (a > b ? b : a), Number.MAX_VALUE);
const max = reduce([1, 2, -4, 4], (a, b) => (a < b ? b : a), Number.MIN_VALUE);
console.log(sum); // 10
console.log(avg); // 2.5
console.log(product); // 24
console.log(min); // -4
console.log(max); // 4
