import timeZones from "./timezones.js";

const [resultsContainers] = document.getElementsByClassName("results");
const [timeZone, dateText, hourText] = resultsContainers.children;
const input = document.getElementById("time-zone");

input.value =
  timeZones[Math.floor(Math.random() * timeZones.length)].split("/")[1];

function main() {
  const inputTZ = input.value
    .toLowerCase()
    .trim()
    .split(/\s/g)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const match = timeZones.find((tz) =>
    tz.includes(inputTZ.replace(/\s/g, "_"))
  );

  if (!inputTZ || !match) return;

  const [date, hour] = new Date()
    .toLocaleString("en-US", { timeZone: match })
    .split(",");

  timeZone.textContent = match;
  dateText.textContent = date;
  hourText.textContent = hour;
}

setInterval(main, 1000);
