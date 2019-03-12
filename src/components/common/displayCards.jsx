import React from "react";

const DisplayCards = props => {
  const { onClick, drawn, feature } = props;
  if (feature) return null;
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
            opacity: card.opacity,
            cursor: "pointer"
          }}
          src={card.image}
          onClick={() => onClick(card)}
        />
      ))}
    </div>
  );
};

export default DisplayCards;
