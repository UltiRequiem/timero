import { randomTZ } from "./timezones.js";
import parseInput, { formatInput, findSimilarTZ } from "./utils.js";

const [resultsContainers] = document.getElementsByClassName("results");
const resultBoxes = [...resultsContainers.children];
const input = document.getElementById("time-zone");

input.value = formatInput(randomTZ);

let data = input.value;
let date = new Date(input.value);
let renderData = parseInput(data);

input.addEventListener("input", () => {
  data = findSimilarTZ(formatInput(input.value));
  date = new Date(findSimilarTZ(data));
});

function main() {
  resultBoxes.forEach((item, index) => {
    item.textContent = renderData[index];
  });
}

setInterval(main, 1000);
