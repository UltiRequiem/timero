import Fuse from "fuse.js";
import { timeZones } from "@ultirequiem/timezones";

const fuse = new Fuse(timeZones);

export function fuzzyFindTZ(customTZ: string): string {
  const [{ item }] = fuse.search(customTZ);
  return item;
}

export function dateHourFormatted(date: Date, timeZone: string) {
  return date.toLocaleString("en-US", { timeZone }).split(",");
}

export function parseDate(date: Date, timeZone: string) {
  return [timeZone, ...dateHourFormatted(date, timeZone)];
}

/** Short name shown in the input, e.g. "America/Lima" -> "Lima". */
export function tzLabel(timeZone: string) {
  const slash = timeZone.indexOf("/");
  return slash === -1 ? timeZone : timeZone.slice(slash + 1);
}

/** Time zones whose name contains the query (case-insensitive). */
export function filterTZ(query: string) {
  const needle = query.trim().toLowerCase().replaceAll(" ", "_");
  return needle
    ? timeZones.filter((tz) => tz.toLowerCase().includes(needle))
    : timeZones;
}
