export const get_index_of = <T>(
  array: T[],
  predicate: (value: T) => boolean
): number => {
  let res = -1;
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (predicate(element)) return i;
  }
  return res;
};
