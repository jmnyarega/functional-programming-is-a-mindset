export const reduce = <T, S>(
  array: T[],
  callbackfn: (acc: S, curr: T, index: number) => S,
  initial: S
) => {
  let res: S = initial;

  for (let i = 0; i < array.length; i++) {
    res = callbackfn(res, array[i], i);
  }
  return res;
};
