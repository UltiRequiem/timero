import "./main.scss";
import copy from "copy-to-clipboard";
import { randomTimeZone } from "@ultirequiem/timezones";
import { filterTZ, fuzzyFindTZ, parseDate, tzLabel } from "./utils";

const { children } = <HTMLDivElement>document.getElementById("results")!;
const input = <HTMLInputElement>document.getElementById("time-zone")!;
const shareButton = <HTMLButtonElement>document.getElementById("shareTZ");
const randomTZButton = <HTMLButtonElement>document.getElementById("randomTZ");
const menuButton = <HTMLButtonElement>document.getElementById("toggleMenu");
const menu = <HTMLElement>document.getElementById("tz-menu");
const menuFilter = <HTMLInputElement>document.getElementById("tz-filter");
const menuList = <HTMLUListElement>document.getElementById("tz-list");

const tzQuery = new URLSearchParams(window.location.search).get("tz");
let timeZone = tzQuery ? fuzzyFindTZ(tzQuery) : randomTimeZone();
input.value = tzLabel(timeZone);

input.addEventListener("input", () => {
  if (!input.value) return;
  timeZone = fuzzyFindTZ(input.value);
  highlightCurrentTZ();
});

const date = new Proxy(new Date(), {
  get(target, property) {
    updateDOM(target);
    return property in target
      ? //@ts-ignore error
        target[property].bind(target)
      : undefined;
  },
});

function updateDOM(date: Date) {
  const data = parseDate(date, timeZone);
  for (let index = 0; index < children.length; index++) {
    children[index].textContent = data[index];
  }
}

shareButton.addEventListener("click", () => {
  const url = new URLSearchParams(window.location.search);
  url.set("tz", timeZone);
  copy(`${window.location.href}?${url.toString()}`);
  alert("Copied to clipboard!");
});

randomTZButton.addEventListener("click", () => {
  setTimeZone(randomTimeZone());
});

function setTimeZone(newTimeZone: string) {
  timeZone = newTimeZone;
  input.value = tzLabel(timeZone);
  updateDOM(new Date());
  highlightCurrentTZ();
}

function renderMenu() {
  const items = filterTZ(menuFilter.value).map((tz) => {
    const item = document.createElement("li");
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = tz.replaceAll("_", " ");
    button.dataset.tz = tz;
    item.append(button);
    return item;
  });

  if (!items.length) {
    const empty = document.createElement("li");
    empty.textContent = "No time zones found";
    items.push(empty);
  }

  menuList.replaceChildren(...items);
  highlightCurrentTZ();
}

function highlightCurrentTZ() {
  for (const button of menuList.querySelectorAll("button")) {
    const isCurrent = button.dataset.tz === timeZone;
    button.classList.toggle("selected", isCurrent);
    if (isCurrent) button.setAttribute("aria-current", "true");
    else button.removeAttribute("aria-current");
  }
}

menuButton.addEventListener("click", () => {
  const open = menu.hidden;
  menu.hidden = !open;
  menuButton.setAttribute("aria-expanded", String(open));
  if (!open) return;
  renderMenu();
  menuList.querySelector(".selected")?.scrollIntoView({ block: "center" });
  menuFilter.focus();
});

menuFilter.addEventListener("input", renderMenu);

menuList.addEventListener("click", (event) => {
  const button = (<HTMLElement>event.target).closest("button");
  if (button?.dataset.tz) setTimeZone(button.dataset.tz);
});

setInterval(() => date.setSeconds(date.getSeconds() + 1), 1000);
