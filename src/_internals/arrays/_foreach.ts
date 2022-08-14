export const foreach = <T>(
  array: T[],
  callbackfn: (v: T, i: number) => void
) => {
  for (let i = 0; i < array.length; i++) {
    callbackfn(array[i], i);
  }
};
