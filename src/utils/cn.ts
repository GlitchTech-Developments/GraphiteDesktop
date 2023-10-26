import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * The function `cn` is a TypeScript function that merges multiple class values into a single string.
 * @param {ClassValue[]} inputs - The `inputs` parameter is a rest parameter that allows you to pass in
 * multiple arguments of type `ClassValue`. The `ClassValue` type represents a class name or an object
 * of class names.
 * @returns The function `cn` is returning the result of calling `twMerge` with the result of calling
 * `clsx` with the `inputs` array as its argument.
 */
export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};
