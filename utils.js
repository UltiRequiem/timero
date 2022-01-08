import timeZones from "./timezones.js";
import { Fuse } from "./deps.js";

export function findSimilarTZ(customTZ) {
  const fuse = new Fuse(timeZones);
  return fuse.search(customTZ)[0].item;
}

export function getDateHourFormatted(timeZone) {
  return new Date().toLocaleString("en-US", { timeZone }).split(",");
}

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

export default function parseInput(input) {
  const match = findSimilarTZ(input);
  return match ? [match, ...getDateHourFormatted(match)] : undefined;
}
