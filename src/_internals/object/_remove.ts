export const object_remove = <S>(obj: S, k: keyof S) => {
  const copy = Object.assign({}, obj);
  delete copy[k];
  return copy;
};
