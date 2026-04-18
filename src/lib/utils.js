import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges multiple Tailwind CSS classes cleanly.
 * Combines standard classes and resolves potential utility conflicts using clsx and tailwind-merge.
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
