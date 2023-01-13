import "./style.module.css";
export default function Color() {
  const randomColor = () => {
    const word = Array.from("abcdef1234567890");
    let code = "";
    for (let i = 0; i < 6; i++) {
      let randomValue = Math.floor(Math.random() * word.length);
      code += word[randomValue];
    }
    return code;
  };
  const items = [];
  for (let i = 0; i < 200; i++) {
    let hexcode = randomColor();
    items.push(
      <div className=" flex text-sm font-bold justify-center items-center relative m-4 bg-slate-100"
      >
        <div
          style={{ backgroundColor: `#${hexcode}ff` }}
          className="w-20 h-32 m text-slate-900 overflow-hidden bg-slate-700 flex justify-center items-center relative"
        >
          <input
            type="text"
            value={`#${hexcode}ff`}
            className="text-center bg-transparent outline-none border-none text-slate-100 rounded "
            readonly
          />
        </div>
        <div
          style={{ backgroundColor: `#${hexcode}cc` }}
          className="w-20 h-32 m text-slate-900 bg-slate-700 flex justify-center items-center relative"
        >
          <input
            type="text"
            value={`#${hexcode}cc`}
            className="text-center bg-transparent outline-none border-none text-slate-100 rounded "
            readonly
          />
        </div>
        <div
          style={{ backgroundColor: `#${hexcode}99` }}
          className="w-20 h-32 m text-slate-900 bg-slate-700 flex justify-center items-center relative"
        >
          <input
            type="text"
            value={`#${hexcode}99`}
            className="text-center bg-transparent outline-none border-none text-slate-100 rounded "
            readonly
          />
        </div>
        <div
          style={{ backgroundColor: `#${hexcode}66` }}
          className="w-20 h-32 m text-slate-900 bg-slate-700 flex justify-center items-center relative"
        >
          <input
            type="text"
            value={`#${hexcode}66`}
            className="text-center bg-transparent outline-none border-none text-slate-100 rounded "
            readonly
          />
        </div>
        <div
          style={{ backgroundColor: `#${hexcode}33` }}
          className="w-20 h-32 m text-slate-900 bg-slate-700 flex justify-center items-center relative"
        >
          <input
            type="text"
            value={`#${hexcode}33`}
            className="text-center bg-transparent outline-none border-none text-slate-100 rounded "
            readonly
          />
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="w-screen relative p-2 flex justify-center items-center rounded bg-gray-400 flex-wrap">
        {items}
      </div>
    </>
  );
}
