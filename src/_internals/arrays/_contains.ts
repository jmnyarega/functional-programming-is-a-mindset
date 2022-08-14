export const contains = <T>(
  array: T[],
  predicate: (value: T) => boolean
): boolean => {
  let found = false;

  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (predicate(element)) return true;
  }

  return found;
};
