export const push = <T>(array: T[], element: T): T[] => {
  const copy_array = array.slice();
  copy_array.push(element);
  return copy_array;
};
