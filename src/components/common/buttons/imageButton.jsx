import React from "react";

const ImageButton = ({ onClick, input, imageId, lastIndex }) => {
  return (
    <div>
      <button
        style={{
          position: "absolute",
          margin: `670px 0px 0px ${
            input === "Next" ? 50 : input === "Previous" ? -120 : -650
          }px`
        }}
        disabled={imageId === lastIndex ? true : false}
        className="btn btn-warning btn-sm"
        onClick={onClick}
      >
        {input}
      </button>
    </div>
  );
};

export default ImageButton;
