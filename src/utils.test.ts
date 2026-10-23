import { describe, expect, it } from "vitest";
import { filterTZ, fuzzyFindTZ, parseDate, tzLabel } from "./utils";

describe("tzLabel", () => {
  it("shows the city of a region/city zone", () => {
    expect(tzLabel("America/Lima")).toBe("Lima");
  });

  it("keeps zones without a region as they are", () => {
    expect(tzLabel("UTC")).toBe("UTC");
  });
});

describe("filterTZ", () => {
  it("returns every zone for an empty query", () => {
    expect(filterTZ("").length).toBeGreaterThan(300);
    expect(filterTZ("   ")).toEqual(filterTZ(""));
  });

  it("matches case-insensitively and treats spaces as underscores", () => {
    expect(filterTZ("new york")).toContain("America/New_York");
    expect(filterTZ("LIMA")).toContain("America/Lima");
  });

  it("returns nothing when nothing matches", () => {
    expect(filterTZ("definitely-not-a-zone")).toEqual([]);
  });
});

describe("fuzzyFindTZ", () => {
  it("finds the closest zone for a loose query", () => {
    expect(fuzzyFindTZ("lima")).toBe("America/Lima");
  });
});

describe("parseDate", () => {
  it("returns the zone, the date and the time", () => {
    const date = new Date(Date.UTC(2024, 0, 2, 3, 4, 5));

    expect(parseDate(date, "UTC")).toEqual(["UTC", "1/2/2024", " 3:04:05 AM"]);
  });

  it("converts to the requested zone", () => {
    const date = new Date(Date.UTC(2024, 0, 2, 3, 4, 5));
    const [, , time] = parseDate(date, "Asia/Tokyo");

    expect(time).toBe(" 12:04:05 PM");
  });
});
