import React from "react";
import "./styles.scss";
export default function Header() {
  return (
    <header>
      <div className="container-third left">
        <a href="."> Visa </a>
      </div>
      <div className="container-third middle">
        <a href=".">Productos</a>
        <a href="."> Developer </a>
        <a href="."> Company </a>
      </div>
      <div className="container-third right">
        <a href=".">Support </a>
        <a href=".">Sign in </a>
      </div>
    </header>
  );
}
