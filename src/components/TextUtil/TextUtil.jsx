import { useState } from "react";
export default function TextUtil() {
  const [text, setText] = useState("");
  const [totalInt, setInt] = useState(0);

  const HandleChange = (e) => {
    let text = e.target.value;
    setText(text);
    const handleInteger = (text) => {
      const x = [...text];
      const number = [..."0123456789"];
      let integer = "";

      for (let i = 0; i < number.length; i++) {
        for (let k = 0; k < x.length; k++) {
          if (x[k] === number[i]) {
            integer += x[k];
          }
        }
      }
      setInt([...integer].length);
    };
    handleInteger(text);
  };
  const handleUppercase = () => {
    setText(text.toUpperCase());
  };
  const handleLowercase = () => {
    setText(text.toLowerCase());
  };
  const handleClear = () => {
    setText("");
  };
  const handleDuplicates = () => {
    let x = [...new Set(Array.from(text))];
    let final = "";
    for (let i = 0; i < x.length; i++) {
      final += x[i];
    }
    setText(final);
  };
  const handleInteger = () => {
    const x = [...text];
    const number = [..."0123456789"];
    let integer = "";

    for (let i = 0; i < number.length; i++) {
      for (let k = 0; k < x.length; k++) {
        if (x[k] === number[i]) {
          integer += x[k];
        }
      }
    }
    setText(integer);
    setInt([...integer].length);
  };

  const handleGap = () => {
    const x = [...text];
    const gap = " ";
    let final = "";
    for (let k = 0; k < x.length; k++) {
      if (x[k] !== gap) {
        final += x[k];
      }
    }
    setText(final);
  };

  return (
    <>
      <h3 className="w-full text-left bg-slate-500 rounded p-2 m-2 text-slate-900 shadow-md">
        Text Utilities
      </h3>
      <div className="bg-slate-400 relative w-full flex flex-col justify-center items-center flex-wrap m-3 rounded p-2 text-slate-900">
        <div className="font-bold w-full text-center bg-gray-300 px-2 my-2 rounded-full">
          Text_Length: {text.length}
        </div>
        {/*total integer*/}
        <div className="font-bold w-full text-center bg-gray-300 px-2 my-2 rounded-full">
          Total_Integer: {totalInt}
        </div>
      </div>
      <input
        type="text"
        onChange={HandleChange}
        value={text}
        className="w-full"
        placeholder="enter your text here..."
      />
      <div className="bg-slate-400 m-4 rounded flex justify-around flex-wrap items-center">
        <button onClick={handleUppercase}>Uppercase</button>
        <button onClick={handleLowercase}>Lowercase</button>
        <button onClick={handleClear} className="bg-red-700">
          Clear
        </button>
        <button onClick={handleDuplicates}>Remove Duplicate💀</button>
        <button onClick={handleInteger}>ShowNumbers</button>
        <button onClick={handleGap}>Remove Gaps</button>
      </div>
    </>
  );
}
