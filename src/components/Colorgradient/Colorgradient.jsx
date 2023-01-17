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
      <div className=" flex rounded text-sm font-bold justify-center items-center relative m-4 bg-slate-100">
        <div
          style={{
            background: `-webkit-linear-gradient(left,#${hexcode}ff,#${hexcode}ee,#${hexcode}dd,#${hexcode}cc,#${hexcode}bb,#${hexcode}aa,#${hexcode}99,#${hexcode}88,#${hexcode}77,#${hexcode}66,#${hexcode}55,#${hexcode}44,#${hexcode}33,#${hexcode}22,#${hexcode}11,#${hexcode}00`,
          }}
          className="w-96 h-32 m rounded text-slate-900 overflow-hidden bg-slate-700 flex justify-center items-center relative"
        >
          #{hexcode}
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
