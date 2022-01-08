import { randomTZ } from "./timezones.ts";
import parseInput, { findSimilarTZ, formatInput } from "./utils.ts";

const [resultsContainers] = document.getElementsByClassName("results");
const resultBoxes = [...resultsContainers.children];
const input = <HTMLInputElement> document.getElementById("time-zone")!;

input.value = randomTZ;

input.addEventListener("input", () => {
});

function main() {
}

setInterval(main, 1000);
