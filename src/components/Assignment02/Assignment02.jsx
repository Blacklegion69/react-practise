import { useState } from "react";
import "./style.css";

export default function Assignment02() {
  const [count, setValue] = useState(0);
  const [total, setTotal] = useState(0);
  const totalvalue = () => {
    setTotal(total + 1);
  };
  const increment = () => {
    setValue(count + 1);
    totalvalue();
  };
  const decrement = () => {
    setValue(count - 1);
    totalvalue();
  };
  const refresh = () => {
    setValue(0);
    totalvalue();
  };
  return (
    <div className="p-2 m-5 bg-red-300 rounded border border-orange-500 flex flex-col justify-center  items-center">
      <h2 className="p-2 m-2 bg-slate-700 rounded text-center text-cyan-300">
        {count}
      </h2>
      <h2 className="p-2 m-2 bg-slate-700 rounded text-center text-cyan-300">
        TotalClick: {total}
      </h2>
      <div className="m-5 p-2 rounded bg-red-200 flex justify-center items-center">
        <button
          onClick={increment}
          className="font-bold text-3xl text-slate-900 p-3 m-2"
          disabled={count === 5 ? true : false}
        >
          +
        </button>
        <button
          onClick={decrement}
          className="font-bold text-3xl text-slate-900 p-3 m-2"
          disabled={count === -5 ? true : false}
        >
          -
        </button>
        <button
          onClick={refresh}
          className="font-bold text-3xl text-slate-900 p-3 m-2"
        >
          0
        </button>
      </div>
    </div>
  );
}
