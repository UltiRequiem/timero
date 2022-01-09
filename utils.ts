import { Fuse, randomTimeZone, timeZones } from "./deps.ts";

const fuse = new Fuse(timeZones);

export const [technicalRandomTZ, randomTZ] = (() => {
  const randtz = randomTimeZone();
  return [randtz, randtz.split("/")[1]];
})();

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
