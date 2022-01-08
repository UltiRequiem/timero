import tz from "./timezones.ts";
import { Fuse } from "./deps.ts";

const fuse = new Fuse(tz);

export function findSimilarTZ(customTZ: string) {
  const [{ item }] = fuse.search(customTZ);
  return item;
}


export function dateHourFormatted(date: Date, timeZone: string) {
  return date.toLocaleString("en-US", { timeZone }).split(",");
}

export function formatInput(input: string) {
  return input
    .toLowerCase()
    .replace("_", "")
    .replace("-", "")
    .trim()
    .split(/\s/g)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export default function parseInput(timezone: Date, date: string) {
  return [timezone, ...dateHourFormatted(timezone, date)];
}
