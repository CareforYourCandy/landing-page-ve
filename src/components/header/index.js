import React from "react";
import "./styles.scss";
import { Link } from "react-router-dom";
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
        <Link to="/users"> Sign in</Link>
      </div>
    </header>
  );
}
