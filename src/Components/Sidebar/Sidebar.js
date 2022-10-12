import React, { useState } from "react";

import plusIcon from "../../assets/plus.png";

import "./Sidebar.css";

function Sidebar(props) {
  const colors = ["#ff5f00", "#800000", "#ff2dff", "#002dff", "#7CFC00"];

  const [listOpen, setListOpen] = useState(false);

  return (
    <div className="sidebar">
      <img src={plusIcon} alt="Add" onClick={() => setListOpen(!listOpen)}style={{width:100}} />
      <ul className={`sidebar_list ${listOpen ? "sidebar_list_active" : ""}`}>
        {colors.map((item, index) => (
          <li
            key={index}
            className="sidebar_list_item"
            style={{ backgroundColor: item }}
            onClick={() => props.addNote(item)}
          />
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
