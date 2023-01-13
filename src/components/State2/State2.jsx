import { useState } from "react";
export default function State2() {
  const [mcount, setCount] = useState({ count: 0, total: 0 });
  const { count, total } = mcount;
  const increment = () => {
    setCount({ count: count + 1, total: total + 1 });
  };
  const decrement = () => {
    setCount({ count: count - 1, total: total + 1 });
  };
  return (
    <div className="flex gap-3 justify-center items-center p-2 m-10 bg-gray-400 rounded flex-col">
      <h1 className="p-2 m-5 rounded text-slate-900 bg-slate-100 m-auto ">
        count:
        {count}
      </h1>
      <h1 className="p-2 m-5 rounded text-slate-900 bg-slate-100 m-auto ">
        total:
        {total}
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
