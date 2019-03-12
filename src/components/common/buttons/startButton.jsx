import React from "react";
import { getWinningsListElem } from "./../winningsList";

const StartButton = ({ onClick, collect, currentWin, status }) => {
  return (
    <button
      onClick={() => onClick()}
      type="button"
      id="table-start"
      className="btn btn-dark btn-lg"
      disabled={status}
    >
      {collect
        ? `COLLECT $${getWinningsListElem(currentWin)[0].value}.00`
        : "START"}
    </button>
  );
};

export default StartButton;
