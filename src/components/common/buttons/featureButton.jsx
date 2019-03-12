import React from "react";

const FeatureButton = ({ onClick, collect, action }) => {
  return (
    <button
      onClick={onClick}
      hidden={collect ? false : true}
      id={`table-feature-btn-${action}`}
      className="btn btn-dark btn-sm m-4"
    >
      <b>{action.toUpperCase()}</b>
    </button>
  );
};

export default FeatureButton;
