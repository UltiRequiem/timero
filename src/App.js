import { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import timeZones from "./timeZones";

const parseTime = (date, timeZone) => {
  try {
    return date
      .toLocaleString("en-US", {
        timeZone,
      })
      .split(",");
  } catch {
    return ["", ""];
  }
};

export default function App() {
  const [timeZone, setTimeZone] = useState("America/Lima");

  const [[slashDate, hourDate], setTime] = useState(
    parseTime(new Date(), timeZone)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(parseTime(new Date(), timeZone));
    }, 1000);
    return () => clearInterval(interval);
  }, [timeZone]);

  return (
    <>
      <h1>Timero</h1>
      <main>
        <div className="input">
          <label htmlFor="timeZoneInput">Put your TimeZone</label>
          <input
            htmlFor="timeZoneInput"
            value={timeZone}
            onInput={(event) => {
              setTimeZone(event.target.value);
            }}
          />
        </div>

        <p>{slashDate}</p>
        <p>{hourDate}</p>
      </main>

      <footer>
        <p>
          <a href="https://github.com/UltiRequiem">
            Eliaz Bobadilla (a.k.a UltiRequiem)
          </a>
        </p>
      </footer>
    </>
  );
}
