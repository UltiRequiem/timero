import { randomTimeZone } from "./deps.ts";
// import parseInput, { findSimilarTZ, formatInput } from "./utils.ts";

// const [resultsContainers] = document.getElementsByClassName("results");
// const resultBoxes = [...resultsContainers.children];
const input = <HTMLInputElement> document.getElementById("time-zone")!;

const randomTZ = randomTimeZone();

input.value = randomTZ;

input.addEventListener("input", () => {});

function main() {}

setInterval(main, 1000);
