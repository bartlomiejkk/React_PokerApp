import React from "react";

const DisplayPattern = ({
  credit,
  started,
  finished,
  feature,
  pattern,
  collect
}) => {
  return (
    <div id="win-info-text">
      <b>
        {credit < 1 && finished && !feature.status
          ? "Out of credit. (Restart the browser to play.)"
          : !finished || !started || collect
          ? ""
          : pattern === "None"
          ? "Unlucky. Try again."
          : `${pattern}! Press "Start" to play High or Low.`}
      </b>
    </div>
  );
};

export default DisplayPattern;
