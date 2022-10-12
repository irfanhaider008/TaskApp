import React, { useState } from "react";

import plusIcon from "../assets/plus.png";

import "./Sidebar/Sidebar";
export default function Color() {
    const textColor = ["#ff5f00", "#800000", "#ff2dff", "#002dff", "#7CFC00"];
    const [listOpen, setListOpen] = useState(false);

  return ( 
    <div className="sidebar">
      <img src={plusIcon} alt="Add" onClick={() => setListOpen(!listOpen)}style={{width:100}} />
      <ul className={`sidebar_list ${listOpen ? "sidebar_list_active" : ""}`}>
        {textColor.map((item, index) => (
          <li
            key={index}
            className="sidebar_list_item"
            style={{ backgroundColor: item }}
          />
          ))}
          </ul>
        </div>
  )
}
