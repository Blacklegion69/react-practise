import { useState } from "react";
export default function ToDo(){
  const [text, setText] = useState("");
  
  const handleChange=(e)=>{
    setText(e.target.value);
  }
  const handleClick=()=>{
    
  }
  return(
    <>
      <div className="flex justify-center items-center bg-slate-400 rounded m-2 p-2">
        <input value={text} onChange={handleChange} type="text" placeholder="Enter your Todo..." />
        <button onClick={handleClick}> Add </button>
      </div>
    </>
    )
}