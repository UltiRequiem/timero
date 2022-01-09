import {
  dateHourFormatted,
  findSimilarTZ,
  randomTZ,
  technicalRandomTZ,
} from "./utils.ts";

const { children } = document.getElementById("results")!;
const input = <HTMLInputElement> document.getElementById("time-zone")!;

input.value = randomTZ;

input.addEventListener("input", () => {});

const date = new Proxy(new Date(), {
  get(target, property) {
    updateDOM(target);
    return property in target ? target[property].bind(target) : undefined;
  },
});

function updateDOM(date: Date) {
  const data = [technicalRandomTZ, ...dateHourFormatted(date, findSimilarTZ(randomTZ))];
  for (let index = 0; index < children.length; index++) {
    children[index].textContent = data[index];
  }
}

setInterval(() => {
  date.setSeconds(date.getSeconds() + 1);
}, 1000);
