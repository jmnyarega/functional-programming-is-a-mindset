import { splice } from "./_splice";

export const shift = <T>(array: T[]): [T, T[]] => {
  const copy_array = array.slice();
  const first_element = copy_array[0];
  const drop_first = splice(copy_array, 0);

  return [first_element, drop_first];
};
