import { randomTZ } from "./timezones.js";
import parseInput from "./utils.js";

const [resultsContainers] = document.getElementsByClassName("results");
const resultBoxes = [...resultsContainers.children];
const input = document.getElementById("time-zone");

input.value = randomTZ;

function main() {
  const data = parseInput(input.value);

  if (!data) return;

  resultBoxes.forEach((item, index) => {
    item.textContent = data[index];
  });
}

setInterval(main, 1000);
