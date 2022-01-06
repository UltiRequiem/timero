import { randomTZ } from "./timezones.js";
import parseInput from "./utils.js";

const [resultsContainers] = document.getElementsByClassName("results");
const resultBoxes = [...resultsContainers.children];
const input = document.getElementById("time-zone");

input.value = randomTZ;

let data = parseInput(input.value);

input.addEventListener("input", () => {
  data = parseInput(input.value);
});

function main() {
  if (!data) return;

  resultBoxes.forEach((item, index) => {
    item.textContent = data[index];
  });
}

setInterval(main, 1000);
