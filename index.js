import { randomTZ } from "./timezones.js";
import { formatInput, getDateHourFormatted, findSimilarTZ } from "./utils.js";

const [resultsContainers] = document.getElementsByClassName("results");
const [timeZone, dateText, hourText] = resultsContainers.children;
const input = document.getElementById("time-zone");

input.value = randomTZ;

function main() {
  const inputTZ = formatInput(input.value);
  const match = findSimilarTZ(inputTZ);

  if (!inputTZ || !match) return;

  const [date, hour] = getDateHourFormatted(match);

  timeZone.textContent = match;
  dateText.textContent = date;
  hourText.textContent = hour;
}

setInterval(main, 1000);
