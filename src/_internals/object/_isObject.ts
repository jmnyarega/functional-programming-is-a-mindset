export const _is_object = <T>(val: T): boolean => {
  if (val === null) return false;
  if (Array.isArray(val)) return false;
  return true;
};
