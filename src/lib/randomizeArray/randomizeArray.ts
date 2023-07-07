import type { TRandomizeArrayOptions } from "./randomizeArray.types";

/**
 * @description Randomizing the array of anything. Either you get one random value or remove the random value from your array.
 *
 * @example
 * randomizeArray(['JavaScript', 'TypeScript', 'HTML', 'CSS']);
 * // Will return ['HTML']
 *
 * @param value
 * Should be array of something. Other than that will be error.
 * @param options
 * Options for this function.
 */
export default function randomizeArray<T = string | number>(
  value: T[],
  options?: TRandomizeArrayOptions
): Array<T> {
  const { isInvertSelection = false } = options || {};
  const ran = Math.floor(Math.random() * Math.max(value.length));

  if (isInvertSelection) return value.filter((v) => v !== value[ran]);

  return [value[ran]];
}
