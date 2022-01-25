import { fuzzyFindTZ, parseDate } from "./utils.ts";
import { copy, randomTimeZone } from "./deps.ts";

const { children } = document.getElementById("results")!;
const input = <HTMLInputElement> document.getElementById("time-zone")!;
const shareButton = <HTMLButtonElement> document.getElementById("shareTZ");
const randomTZButton = <HTMLButtonElement> document.getElementById("randomTZ");

const tzQuery = new URLSearchParams(window.location.search).get("tz");
let timeZone = tzQuery ? fuzzyFindTZ(tzQuery) : randomTimeZone();
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

shareButton.onclick = () => {
  const url = new URLSearchParams(window.location.search);
  url.set("tz", timeZone);
  copy(`${window.location.href}?${url.toString()}`);
  alert("Copied to clipboard!");
};

randomTZButton.onclick = () => {
  timeZone = randomTimeZone();
  input.value = timeZone.split("/")[1];
};

setInterval(() => date.setSeconds(date.getSeconds() + 1), 1000);
