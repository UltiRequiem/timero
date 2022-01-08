import tz from "./timezones.js";
import { Fuse } from "./deps.js";

const fuse = new Fuse(tz);
/**
 * @param {string} customTZ The input timezone
 * @returns {string} The fuzzy founded Time Zone
 */
export function findSimilarTZ(customTZ) {
  return fuse.search(customTZ)[0].item;
}

/**
 * @param {Date} date
 * @param {string} timeZone
 */
export function getDateHourFormatted(date, timeZone) {
  return date.toLocaleString("en-US", { timeZone }).split(",");
}

/**
 * @param {string} input
 * @returns {string}
 */
export function formatInput(input) {
  return input
    .toLowerCase()
    .replace("_", "")
    .replace("-", "")
    .trim()
    .split(/\s/g)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

/**
 * @param {string} timezone
 * @param {Date} date
 * @returns
 */
export default function parseInput(timezone, date) {
  return [timezone, ...getDateHourFormatted(timezone, date)];
}
