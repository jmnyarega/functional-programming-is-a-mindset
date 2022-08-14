export const filter = <T>(
  array: T[],
  predicate: (v: T, i: number) => boolean
): T[] => {
  let new_array: T[] = [];

  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    predicate(element, i) && new_array.push(element);
  }
  return new_array;
};
