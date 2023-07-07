export type TSlugerizationOptions = {
  /**
   * For splitting between the word.
   *
   * Since the default value is `-`, the output will be like example below.
   * @example 'this-is-example-of-the-hyphen'
   */
  hyphen?: string;
  /**
   * To determine whether the output is all lower case or upper case.
   *
   * Since the default value is `lower`, the output will be like example below.
   * @example 'this-is-when-lower-case'
   */
  slugCase?: "lower" | "upper";
};
