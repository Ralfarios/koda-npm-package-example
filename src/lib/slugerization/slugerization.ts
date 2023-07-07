import { allTrim } from "../allTrim";
import type { TSlugerizationOptions } from "./slugerization.types";

export default function slugerization(
  value: string,
  options?: TSlugerizationOptions
): string {
  const { hyphen = "-", slugCase = "lower" } = options || {};

  return allTrim(
    value[slugCase === "lower" ? "toLowerCase" : "toUpperCase"]().replace(
      /[^\w\s]|[_]/g,
      ""
    )
  ).replace(/\s/g, hyphen);
}
