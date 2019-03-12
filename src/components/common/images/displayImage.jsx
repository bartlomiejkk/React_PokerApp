import React from "react";
import Image_1 from "./Image_1.png";
import Image_2 from "./Image_2.png";
import Image_3 from "./Image_3.png";
import Image_4 from "./Image_4.png";

const Images = [
  {
    image: Image_1,
    text:
      "During the first round you keep chosen cards and shuffle the rest, drawing extra cards."
  },
  {
    image: Image_2,
    text:
      "If you match a winning pattern, you can play High or Low to boost your winnings."
  },
  {
    image: Image_3,
    text:
      "High or Low: Guess whether the subsequent card is higher or lower than the previous one."
  },
  {
    image: Image_4,
    text:
      "Keep on going or collect your winnings. However, if you get it wrong, you lose it all."
  }
];

const DisplayImage = ({ onClick, id }) => {
  return (
    <div>
      <img
        id="display-image"
        src={Images[`${id}`].image}
        alt={`How-to-play-${id}`}
        minwidth={id === 0 || 1 ? "756px" : "1300px"}
        height="606px"
      />
      <span style={{ fontSize: "24px", color: "white" }}>
        {Images[`${id}`].text}
      </span>
    </div>
  );
};

export function getImages() {
  return Images.map(i => i);
}

export default DisplayImage;
