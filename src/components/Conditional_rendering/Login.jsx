import "./style.module.css";
import React, { useState } from "react";
export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleName(e) {
    setName(e.target.value);
  }
  function handleEmail(e) {
    setEmail(e.target.value);
  }
  function handlePassword(e) {
    setPassword(e.target.value);
  }
  function handleSubmit(e) {
    const info = {
      name,
      email,
      password,
    };
    e.preventDefault();
    console.log(info);
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="w-full p-3 bg-slate-700 flex justify-center items-center flex-col rounded border border-sky-400"
      >
        <h4 className="underline font-bold text-lime-400"> Regestration </h4>
        <div className="w-full flex justify-between items-center m-2">
          <label className="font-bold" for="name">
            Name{" "}
          </label>
          <input onChange={handleName} type="text" value={name} required />
        </div>
        <div className="w-full flex justify-between items-center m-2">
          <label className="font-bold" for="email">
            Enail{" "}
          </label>
          <input onChange={handleEmail} type="email" value={email} required />
        </div>
        <div className="w-full flex justify-between items-center m-2">
          <label className="font-bold" for="password">
            Password{" "}
          </label>
          <input
            onChange={handlePassword}
            type="password"
            value={password}
            required
          />
        </div>
        <button
          className="m-3 font-bold bg-rose-400 text-sky-800 rounded"
          type="submit"
        >
          {" "}
          Regester{" "}
        </button>
      </form>
      <div className="m-auto w-full mt-10 p-3 m-3 bg-slate-700 rounded border-sky-400 border text-center">
        Name:{"    "}
        {name}
        <br />
        Email:{"   "}
        {email}
        <br />
        Password:{""}
        {password}
      </div>
    </>
  );
}
