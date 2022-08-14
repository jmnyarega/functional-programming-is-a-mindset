export const pop = <T>(array: T[]): number => {
  const copy_array = array.slice();
  return copy_array.push();
};
