import "./style.module.css";
import React, { useState } from "react";
export default function Form() {
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const { name, email, password } = user;

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    console.log(user);
    e.preventDefault();
  };

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
          <input
            onChange={handleChange}
            type="text"
            name="name"
            value={name}
            required
          />
        </div>
        <div className="w-full flex justify-between items-center m-2">
          <label className="font-bold" for="email">
            Enail{" "}
          </label>
          <input
            onChange={handleChange}
            type="email"
            name="email"
            value={email}
            required
          />
        </div>
        <div className="w-full flex justify-between items-center m-2">
          <label className="font-bold" for="password">
            Password{" "}
          </label>
          <input
            onChange={handleChange}
            type="password"
            value={password}
            name="password"
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
