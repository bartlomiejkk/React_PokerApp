import React from "react";
import CardBack from "./../../cards/back.png";

const DisplayFeature = props => {
  const { drawn, feature } = props;
  if (!feature) return null;
  return (
    <div>
      {drawn.map(card => (
        <img
          key={card.name}
          id="table-cards"
          alt={card.name}
          className="m-1"
          style={{
            width: 93.75,
            height: 131.25,
            opacity: card.opacity
          }}
          src={card.hidden ? CardBack : card.image}
        />
      ))}
    </div>
  );
};

export default DisplayFeature;
