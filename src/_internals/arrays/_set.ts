export const array_set = <T>(array: T[], index: number, value: T): T[] => {
  const copy_array = array.slice();
  copy_array[index] = value;
  return copy_array;
};
