import { useState } from "react";

export default function Modernclock() {
  const [time, setTime] = useState({
    full: "0",
    millisecond: "0",
  });
  let { full, millisecond } = time;

  setInterval(() => {
    let t = new Date();
    setTime({
      full: t.toLocaleTimeString(),
      millisecond: t.getTime(),
    });
  }, 1000);

  return (
    <>
      <div>{full}</div>
      <div>{millisecond}</div>
    </>
  );
}
