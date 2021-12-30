import timeZones from "./timezones.js";

export function findSimilarTZ(customTZ) {
  return timeZones.find((tz) => tz.includes(customTZ.replace(/\s/g, "_")));
}

export function getDateHourFormatted(timeZone) {
  return new Date().toLocaleString("en-US", { timeZone }).split(",");
}

export function formatInput(input) {
  return input
    .toLowerCase()
    .trim()
    .split(/\s/g)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export default function parseInput(input) {
  const match = findSimilarTZ(formatInput(input));
  return match ? [match, ...getDateHourFormatted(match)] : null;
}
