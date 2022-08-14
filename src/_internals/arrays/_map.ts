export const map = <T, U>(
  array: T[],
  callbackfn: (value: T, index: number) => void
): U[] => {
  let new_array: any[] = [];

  for (let i = 0; i < array.length; i++) {
    new_array.push(callbackfn(array[i], i));
  }

  return new_array;
};
