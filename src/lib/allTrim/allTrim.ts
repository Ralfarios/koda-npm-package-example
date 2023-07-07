/**
 *
 * @description Remove double spacing, or spacing on the front or back of the value.
 *
 * @example
 * allTrim('  welcome     to the     space   ship  !     ');
 * // Will return 'welcome to the space ship !'
 *
 * @param value
 * Should be string with a lot of spaces.
 */
export default function allTrim(value: string): string {
  return value
    .replace(/\s+/g, " ")
    .replace(/^\s+|\s+$/, "")
    .trim();
}
