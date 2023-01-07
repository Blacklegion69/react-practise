import React, { useState } from "react";
import "./style.css";

export default function Usestate() {
  const [count, setItems] = useState(0);
  const increment = (e) => {
    setItems(count + 1);
  };
  const decrement = () => {
    setItems(count - 1);
  };
  return (
    <div className="flex justify-center items-center p-2 m-10 bg-gray-400 rounded flex-col">
      <h1 className="p-2 m-2 flex text-slate-500 justify-center items-center rounded text-slate-900 bg-slate-100 m-auto ">
        count
        <span className="p-2 text-slate-900 rounded-full text-center">
          {count}
        </span>
      </h1>
      <div className="flex justify-center items-center m-2 bg-gray-400 p-2 m-2 font-bold">
        <button
          className="w-10 p-2 m-2 mx-10 bg-slate-900 text-slate-100 m-auto font-bold"
          onClick={increment}
        >
          +
        </button>
        <button
          className="w-10 p-2 m-2 mx-10 bg-slate-900 text-slate-100 m-auto font-bold"
          onClick={decrement}
        >
          -
        </button>
      </div>
    </div>
  );
}
