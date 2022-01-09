import { fuzzyFindTZ, initialTimeZone, parseDate } from "./utils.ts";

const { children } = document.getElementById("results")!;
const input = <HTMLInputElement> document.getElementById("time-zone")!;

let timeZone = initialTimeZone;
input.value = timeZone.split("/")[1];

input.addEventListener("input", () => {
  if (!input.value) return;
  timeZone = fuzzyFindTZ(input.value);
});

const date = new Proxy(new Date(), {
  get(target, property) {
    updateDOM(target);
    return property in target ? target[property].bind(target) : undefined;
  },
});

function updateDOM(date: Date) {
  const data = parseDate(date, timeZone);
  for (let index = 0; index < children.length; index++) {
    children[index].textContent = data[index];
  }
}

setInterval(() => date.setSeconds(date.getSeconds() + 1), 1000);
