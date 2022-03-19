import { Fuse, timeZones } from "./deps.ts";

const fuse = new Fuse(timeZones);

export function fuzzyFindTZ(customTZ: string) {
  const [{ item }] = fuse.search(customTZ);
  return item;
}

export function dateHourFormatted(date: Date, timeZone: string) {
  return date.toLocaleString("en-US", { timeZone }).split(",");
}

export function parseDate(date: Date, timeZone: string) {
  return [timeZone, ...dateHourFormatted(date, timeZone)];
}
