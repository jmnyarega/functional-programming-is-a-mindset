export const splice = <T>(array: T[], index: number): T[] => {
  const copy_array = array.slice();
  for (let i = 0; i < array.length; i++) {
    if (i === index) {
      copy_array.splice(i, 1);
      break;
    }
  }
  return copy_array;
};
