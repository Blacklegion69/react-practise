import { useState } from "react";













export default function ToDo() {
  const [text, setText] = useState("");
  const [items, setItems] = useState({
    todo: ""
  });
  
  let {todo} = items;
  const handleChange = (e) => {
    setText(e.target.value);
    e.preventDefault();
  };
  const handleClick = () => {
    
    setItems({
      todo: todo + `<h3>${text}</h3>`
    })
    
  };
  return (
    <>
      <div className="flex justify-center items-center bg-slate-400 rounded m-2 p-2">
        <input
          value={text}
          onChange={handleChange}
          type="text"
          placeholder="Enter your Todo..."
        />
        <button onClick={handleClick}> Add </button>
      </div>
      <div>
      {todo}
      </div>
    </>
  );
}
