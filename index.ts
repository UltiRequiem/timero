import { randomTZ } from "./utils.ts";

const { children } = document.getElementById("results")!;
const resultBoxes = [...children];
const input = <HTMLInputElement> document.getElementById("time-zone")!;

input.value = randomTZ;

input.addEventListener("input", () => {});

function main() {}

setInterval(main, 1000);
