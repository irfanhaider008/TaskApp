import React from 'react'
import { NavLink } from 'react-router-dom';
import './Header.css'
export default function Header() {
    const items = document.querySelectorAll(".nav-item");
const ind = document.querySelector(".indicator");
const colorPallette = [
  { background: "#264653", foreground: "#ffffff" },
  { background: "#f4a261", foreground: "#000000" },
  { background: "#2a9d8f", foreground: "#ffffff" },
  { background: "#e9c46a", foreground: "#000000" },
  { background: "#e76f51", foreground: "#ffffff" }
];

function handleIndicator(el) {
  ind.style.backgroundColor = el.dataset.bcolor;
  el.style.color = el.dataset.fcolor;
  ind.style.width = el.offsetWidth + "px";
  ind.style.left = el.offsetLeft + "px";
}

items.forEach((item, index) => {
  item.dataset.bcolor = colorPallette[index].background;
  item.dataset.fcolor = colorPallette[index].foreground;
  item.addEventListener("mousemove", (e) => {
    handleIndicator(e.target);
  });
  item.addEventListener("click", (e) => {
    items.forEach((item) => item.classNameList.remove("active"));
    e.target.classNameList.add("active");
    document
      .querySelector(".active")
      .style.setProperty("--bc", e.target.dataset.bcolor);
  });
  item.addEventListener("mouseleave", (e) => {
    e.target.style.color = "#000000";
  });
});

//By Mostafa Alvandi
//https://codepen.io/alvandisetvat/pen/gOeQjPR

  return (
    <header className="header">
  <nav className="navbar">
    <ul className="main-nav">
   
      <li   link className="nav-item " ><NavLink to='/' style={{textDecoration:'none'}}>App</NavLink></li>
      
      <li link className="nav-item" ><NavLink  style={{textDecoration:'none'}} to='/post'>Posts</NavLink></li>
     
      <li   link className="nav-item" ><NavLink style={{textDecoration:'none'}} to='/ant'>Ant Design</NavLink></li>
      <li link className="nav-item" ><NavLink  style={{textDecoration:'none'}} to='/table'>Table</NavLink></li>
      <li link className="nav-item" ><NavLink  style={{textDecoration:'none'}} to='/register'>Register</NavLink></li>
      <li link className="nav-item" ><NavLink  style={{textDecoration:'none'}} to='/crud'>CRUD</NavLink></li>



    </ul>
    <div className="indicator"></div>
  </nav>
</header>

  )}
