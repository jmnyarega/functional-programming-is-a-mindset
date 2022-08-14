export const object_set = <S, T, U>(obj: S, k: T, v: U): S => {
  const copy = Object.assign({}, obj);
  copy[k] = v;
  return copy;
};
