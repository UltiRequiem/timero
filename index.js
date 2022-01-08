import { randomTZ } from "./timezones.js";

import parseInput, { formatInput } from "./utils.js";

const [resultsContainers] = document.getElementsByClassName("results");
const resultBoxes = [...resultsContainers.children];
const input = document.getElementById("time-zone");

input.value = formatInput(randomTZ);

input.addEventListener("input", () => {
  data = formatInput(input.value);
});

let data = input.value;

function main() {
  if (!data) return;

  const renderData = parseInput(data);

  resultBoxes.forEach((item, index) => {
    item.textContent = renderData[index];
  });
}

setInterval(main, 1000);
