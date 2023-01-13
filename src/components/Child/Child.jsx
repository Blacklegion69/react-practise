import React from "react";
import "./style.module.css";

export default function Child(props) {
  const Data = "Hi there I am from Child";
  props.childData(Data);
  return <div>Child</div>;
}
