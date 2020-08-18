import React from "react";
import logo from "../imgs/logotype2.png";

export default function Header({ title }) {
  return (
    <header className="App__header">
      <div className="App__header__wrapper">
        <img src={logo} className="logo" alt="logotype" />
        <h1>{title}</h1>
      </div>
    </header>
  )
}