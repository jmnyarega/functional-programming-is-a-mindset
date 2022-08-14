import { _is_object } from "./object/_isObject";
import { _is_array } from "./_isArray";
import { _is_function } from "./_isFunction";
import { _is_NaN } from "./_isnan";

export const is_equal = <T>(a: T, b: T): boolean => {
  if (_is_NaN(a) || _is_NaN(b)) return false;
  if (_is_array(a) || _is_array(b)) return false;
  if (_is_function(a) || _is_function(b)) return false;

  // only compare objects & primitives [ strings, numbers, boolean, undefined ]
  // compare same types
  if (_is_object(a) && _is_object(b)) return Object.is(a, b);
  if (typeof a === typeof b) return a === b;

  return false;
};
