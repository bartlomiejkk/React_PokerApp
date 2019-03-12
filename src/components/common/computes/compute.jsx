import React, { Component } from "react";
import RoyalFlush from "./royalFlush.js";
import StraightFlush from "./straightFlush.js";
import FourOfAKind from "./fourOfAKind.js";
import FullHouse from "./fullHouse.js";
import Flush from "./flush.js";
import Straight from "./straight.js";
import ThreeOfAKind from "./threeOfAKind.js";
import TwoPairs from "./twoPairs.js";

class Compute extends Component {
  handleCompute = drawn => {
    if (RoyalFlush(drawn)) return "Royal Flush";

    if (StraightFlush(drawn)) return "Straight Flush";

    if (FourOfAKind(drawn)) return "Four of a Kind";

    if (FullHouse(drawn)) return "Full House";

    if (Flush(drawn)) return "Flush";

    if (Straight(drawn)) return "Straight";

    if (ThreeOfAKind(drawn)) return "Three of a Kind";

    if (TwoPairs(drawn)) return "Two Pairs";

    return "None";
  };

  render() {
    return <div />;
  }
}

export default Compute;
