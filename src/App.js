import { useState, useEffect } from "react";
import timeZones from "./timeZones";

export default function App() {
  const [timeZone, setTimeZone] = useState("America/Lima");

  const parseTime = (date) => {
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

  const [time, setTime] = useState(parseTime(new Date()));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(parseTime(new Date()));
    }, 1000);
    return () => clearInterval(interval);
  }, [parseTime]);

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

        <p>{time[0]}</p>
        <p>{time[1]}</p>
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
