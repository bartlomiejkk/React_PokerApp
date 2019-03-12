import React from "react";
import { getWinningsList } from "./winningsList.js";

const WinningsTable = selected => {
  const list = getWinningsList();
  return (
    <div>
      <ul id="list-group" className="list-group">
        {list.map(item => {
          return (
            <li
              key={item.name}
              className={`list-group-item list-group-item-${
                selected.selected === item.name ? "warning" : "light"
              }`}
            >
              {item.name} (${item.value})
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default WinningsTable;
