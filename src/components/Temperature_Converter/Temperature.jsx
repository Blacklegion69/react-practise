import { useState } from "react";
export default function Temperature() {
  const [celsius, setCelsius] = useState();
  const [fahrenheit, setFarenheit] = useState();
  const [kelvin, setKelvin] = useState();
  const [icon, setIcon] = useState("🧊");

  const handleIcon = (result) => {
    if (result >= 40) {
      setIcon("🔥");
    }
    if (result <= -15) {
      setIcon("🧊");
    }
    if (result < 10) {
      setIcon("🥶")
    }
    if (result >= 25 && result <= 29) {
      setIcon("😁");
    }
  };

  const handleCelcius = (e) => {
    let celsius = parseInt(e.target.value);
    setCelsius(celsius);
    setFarenheit((9 * celsius) / 5 + 32);
    setKelvin(celsius + 273.15);
    handleIcon(celsius);
  };
  const handleFahrenheit = (e) => {
    let fahrenheit = e.target.value;
    setFarenheit(fahrenheit);
    let celsius = (5 * (e.target.value - 32)) / 9;
    setCelsius(celsius)
    handleIcon(celsius)
    setKelvin((5 * (e.target.value - 32)) / 9 + 273);
  };
  const handleKelvin = (e) => {
    setKelvin(e.target.value);
    let celsius = (e.target.value - 273.15);
    setCelsius(celsius);
    handleIcon(celsius);
    setFarenheit((9 * (e.target.value - 273)) / 5 + 32);
  };
  return (
    <form className="w-96 p-2 bg-slate-300 rounded flex justify-center relative items-center flex-col">
      <h4 className="p-3 m-3 underline text-sky-900 font-bold">
        {" "}
        Temperature convertor{" "}
      </h4>
      <div className="w-full text-right pr-10 p-3 m-3 rounded-full">
        {" "}
        {icon}{" "}
      </div>
      <div className="my-5 w-full flex justify-center items-center">
        <label
          for="celsius"
          className="w-60 text-center text-slate-900 font-bold"
        >
          celsius{" "}
        </label>
        <input
          onChange={handleCelcius}
          name="celsius"
          type="number"
          value={celsius}
        />
      </div>
      <div className="my-5 w-full flex justify-center items-center">
        <label
          for="fahrenheit"
          className="w-60 text-center text-slate-900 font-bold"
        >
          fahrenheit{" "}
        </label>
        <input
          onChange={handleFahrenheit}
          name="fahrenheit"
          type="number"
          value={fahrenheit}
        />
      </div>
      <div className="my-5 w-full flex justify-center items-center">
        <label
          for="kelvin"
          className="w-60 text-center text-slate-900 font-bold"
        >
          kelvin{" "}
        </label>
        <input
          onChange={handleKelvin}
          name="kelvin"
          type="number"
          value={kelvin}
        />
      </div>
    </form>
  );
}
