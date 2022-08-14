export const _is_NaN = <T>(val: T) =>
  typeof val === "number" && isNaN(val) && val !== val;
