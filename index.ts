import { randomTZ } from "./utils.ts";

const resultsContainers = document.getElementById("results")!;
// deno-lint-ignore no-unused-vars
const resultBoxes = [...resultsContainers.children];
const input = <HTMLInputElement> document.getElementById("time-zone")!;

input.value = randomTZ;

input.addEventListener("input", () => {});

function main() {}

setInterval(main, 1000);
