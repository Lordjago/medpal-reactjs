import { useEffect } from "react";
import {Helmet} from "react-helmet";

export default function Header() {
  const handle = (e) => {
    e.preventDefault();
    const menu = document.querySelector(".nav-bar-toggle");
    const tabs = document.querySelector(".nav-tabs");

    // menu.addEventListener("click", function () {
      tabs.classList.toggle("active");
    // });
  }
  return (
    <>
        
    <header className="header">
    <img
      src="https://medpal.care/static/logo.svg"
      alt="placeholder"
      className="brand-logo"
    />
    <div className="nav-bar-toggle" onClick={handle}>
      <span><i className="bi bi-list"></i></span>
    </div>
    <ul className="nav-tabs">
      <li className="nav-link">
        <a href="#" className="active">Home</a>
      </li>
      <li className="nav-link">
        <a href="#">About us</a>
      </li>
      <li className="nav-link">
        <a href="#">Contact us</a>
      </li>
      <li className="nav-link">
        <a href="#">FAQs</a>
      </li>
      <li className="nav-link">
        <a href="#">Login</a>
      </li>
      <li className="nav-link active">
        <button className="btn">Get Started</button>
      </li>
    </ul>
  </header>
    </>
  )
}
