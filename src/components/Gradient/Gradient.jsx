import "./style.module.css";
import React, { useState } from "react";

export default function Gradient() {
  const random = () => {
    const r = Math.floor(Math.random() * 255);
    return r;
  };
  const [color, setColor] = useState({
    red: random(),
    green: random(),
    blue: random(),
    alpha: "0.73",
  });

  const { red, green, blue, alpha } = color;

  const handleColor = (e) => {
    setColor({ ...color, [e.target.name]: e.target.value });
  };
  const copycode = (e) => {
    e.target.select();
    document.execCommand("copy");
  };
  return (
    <>
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 relative p-2 m-5 rounded flex justify-center flex-col items-center">
        <h3 className="bg-gradient-to-r from-orange-300 to-rose-400 bg-clip-text text-transparent m-3 p-2 rounded text-center  font-bold">
          RGBa color Generator
        </h3>
        <div
          style={{ backgroundColor: `rgba(${red},${green},${blue},${alpha})` }}
          className="w-64 h-48 m-2 rounded bg-slate-100"
        ></div>
        <div onClick={copycode}>
          <input
            className="range-slider__range m-1 text-center text-slate-100 bg-teal-900 rounded "
            type="text"
            id="text"
            value={`rgba(${red},${green},${blue},${alpha})`}
            readonly
          />
        </div>
        <div className="m-2 p-2 flex justify-center items-center rounded flex-col">
          <div className="p-2 m-1 rounded bg-teal-200 flex justify-center items-center text-slate-900 font-bold">
            <label for="red" className="w-28 text-center rounded bg-rose-500">
              Red:{" "}
            </label>
            <input
              onChange={handleColor}
              type="range"
              name="red"
              min="0"
              max="255"
              value={red}
            />
            <h6 className="w-10 text-center font-bold bg-emerald-400 rounded m-2 ">
              {red}
            </h6>
          </div>
          <div className="p-2 m-1 rounded bg-teal-200 flex justify-center items-center text-slate-900 font-bold">
            <label for="green" className="w-28 text-center rounded bg-rose-500">
              {" "}
              Green:{" "}
            </label>
            <input
              onChange={handleColor}
              type="range"
              name="green"
              min="0"
              max="255"
              value={green}
            />
            <h6 className="w-10 text-center font-bold bg-emerald-400 rounded m-2 ">
              {green}
            </h6>
          </div>

          <div className="p-2 m-1 rounded bg-teal-200 flex justify-center items-center text-slate-900 font-bold">
            <label for="blue" className="w-28 text-center rounded bg-rose-500 ">
              {" "}
              Blue:{" "}
            </label>
            <input
              onChange={handleColor}
              type="range"
              name="blue"
              min="0"
              max="255"
              value={blue}
            />
            <h6 className="w-10 text-center font-bold bg-emerald-400 rounded m-2 ">
              {blue}
            </h6>
          </div>
          <div className="p-2 m-1 rounded bg-teal-200 flex justify-center items-center text-slate-900 font-bold">
            <label
              for="alpha"
              className="w-28 text-center rounded bg-rose-500 "
            >
              {" "}
              Alpha:{" "}
            </label>
            <input
              onChange={handleColor}
              type="range"
              name="alpha"
              min="0"
              step="0.02"
              max="1"
              value={alpha}
            />
            <h6 className="w-10 text-center font-bold bg-emerald-400 rounded m-2 ">
              {alpha}
            </h6>
          </div>
        </div>
      </div>
    </>
  );
}
