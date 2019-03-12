import hearts_A from "./../../cards/hearts_A.png";
import hearts_K from "./../../cards/hearts_K.png";
import hearts_Q from "./../../cards/hearts_Q.png";
import hearts_J from "./../../cards/hearts_J.png";
import hearts_10 from "./../../cards/hearts_10.png";
import hearts_9 from "./../../cards/hearts_9.png";
import hearts_8 from "./../../cards/hearts_8.png";
import hearts_7 from "./../../cards/hearts_7.png";
import hearts_6 from "./../../cards/hearts_6.png";
import hearts_5 from "./../../cards/hearts_5.png";
import hearts_4 from "./../../cards/hearts_4.png";
import hearts_3 from "./../../cards/hearts_3.png";
import hearts_2 from "./../../cards/hearts_2.png";
import diamonds_A from "./../../cards/diamonds_A.png";
import diamonds_K from "./../../cards/diamonds_K.png";
import diamonds_Q from "./../../cards/diamonds_Q.png";
import diamonds_J from "./../../cards/diamonds_J.png";
import diamonds_10 from "./../../cards/diamonds_10.png";
import diamonds_9 from "./../../cards/diamonds_9.png";
import diamonds_8 from "./../../cards/diamonds_8.png";
import diamonds_7 from "./../../cards/diamonds_7.png";
import diamonds_6 from "./../../cards/diamonds_6.png";
import diamonds_5 from "./../../cards/diamonds_5.png";
import diamonds_4 from "./../../cards/diamonds_4.png";
import diamonds_3 from "./../../cards/diamonds_3.png";
import diamonds_2 from "./../../cards/diamonds_2.png";
import spades_A from "./../../cards/spades_A.png";
import spades_K from "./../../cards/spades_K.png";
import spades_Q from "./../../cards/spades_Q.png";
import spades_J from "./../../cards/spades_J.png";
import spades_10 from "./../../cards/spades_10.png";
import spades_9 from "./../../cards/spades_9.png";
import spades_8 from "./../../cards/spades_8.png";
import spades_7 from "./../../cards/spades_7.png";
import spades_6 from "./../../cards/spades_6.png";
import spades_5 from "./../../cards/spades_5.png";
import spades_4 from "./../../cards/spades_4.png";
import spades_3 from "./../../cards/spades_3.png";
import spades_2 from "./../../cards/spades_2.png";
import clubs_A from "./../../cards/clubs_A.png";
import clubs_K from "./../../cards/clubs_K.png";
import clubs_Q from "./../../cards/clubs_Q.png";
import clubs_J from "./../../cards/clubs_J.png";
import clubs_10 from "./../../cards/clubs_10.png";
import clubs_9 from "./../../cards/clubs_9.png";
import clubs_8 from "./../../cards/clubs_8.png";
import clubs_7 from "./../../cards/clubs_7.png";
import clubs_6 from "./../../cards/clubs_6.png";
import clubs_5 from "./../../cards/clubs_5.png";
import clubs_4 from "./../../cards/clubs_4.png";
import clubs_3 from "./../../cards/clubs_3.png";
import clubs_2 from "./../../cards/clubs_2.png";

const Cards = [
  {
    name: "hearts_A",
    value: "HA",
    num: 14, // used for Straight
    opacity: 1,
    image: hearts_A,
    hidden: false
  },
  {
    name: "hearts_K",
    value: "HK",
    num: 13,
    opacity: 1,
    image: hearts_K,
    hidden: false
  },
  {
    name: "hearts_Q",
    value: "HQ",
    num: 12,
    opacity: 1,
    image: hearts_Q,
    hidden: false
  },
  {
    name: "hearts_J",
    value: "HJ",
    num: 11,
    opacity: 1,
    image: hearts_J,
    hidden: false
  },
  {
    name: "hearts_10",
    value: "H10",
    num: 10,
    opacity: 1,
    image: hearts_10,
    hidden: false
  },
  {
    name: "hearts_9",
    value: "H9",
    num: 9,
    opacity: 1,
    image: hearts_9,
    hidden: false
  },
  {
    name: "hearts_8",
    value: "H8",
    num: 8,
    opacity: 1,
    image: hearts_8,
    hidden: false
  },
  {
    name: "hearts_7",
    value: "H7",
    num: 7,
    opacity: 1,
    image: hearts_7,
    hidden: false
  },
  {
    name: "hearts_6",
    value: "H6",
    num: 6,
    opacity: 1,
    image: hearts_6,
    hidden: false
  },
  {
    name: "hearts_5",
    value: "H5",
    num: 5,
    opacity: 1,
    image: hearts_5,
    hidden: false
  },
  {
    name: "hearts_4",
    value: "H4",
    num: 4,
    opacity: 1,
    image: hearts_4,
    hidden: false
  },
  {
    name: "hearts_3",
    value: "H3",
    num: 3,
    opacity: 1,
    image: hearts_3,
    hidden: false
  },
  {
    name: "hearts_2",
    value: "H2",
    num: 2,
    opacity: 1,
    image: hearts_2,
    hidden: false
  },
  {
    name: "diamonds_A",
    value: "DA",
    num: 14,
    opacity: 1,
    image: diamonds_A,
    hidden: false
  },
  {
    name: "diamonds_K",
    value: "DK",
    num: 13,
    opacity: 1,
    image: diamonds_K,
    hidden: false
  },
  {
    name: "diamonds_Q",
    value: "DQ",
    num: 12,
    opacity: 1,
    image: diamonds_Q,
    hidden: false
  },
  {
    name: "diamonds_J",
    value: "DJ",
    num: 11,
    opacity: 1,
    image: diamonds_J,
    hidden: false
  },
  {
    name: "diamonds_10",
    value: "D10",
    num: 10,
    opacity: 1,
    image: diamonds_10,
    hidden: false
  },
  {
    name: "diamonds_9",
    value: "D9",
    num: 9,
    opacity: 1,
    image: diamonds_9,
    hidden: false
  },
  {
    name: "diamonds_8",
    value: "D8",
    num: 8,
    opacity: 1,
    image: diamonds_8,
    hidden: false
  },
  {
    name: "diamonds_7",
    value: "D7",
    num: 7,
    opacity: 1,
    image: diamonds_7,
    hidden: false
  },
  {
    name: "diamonds_6",
    value: "D6",
    num: 6,
    opacity: 1,
    image: diamonds_6,
    hidden: false
  },
  {
    name: "diamonds_5",
    value: "D5",
    num: 5,
    opacity: 1,
    image: diamonds_5,
    hidden: false
  },
  {
    name: "diamonds_4",
    value: "D4",
    num: 4,
    opacity: 1,
    image: diamonds_4,
    hidden: false
  },
  {
    name: "diamonds_3",
    value: "D3",
    num: 3,
    opacity: 1,
    image: diamonds_3,
    hidden: false
  },
  {
    name: "diamonds_2",
    value: "D2",
    num: 2,
    opacity: 1,
    image: diamonds_2,
    hidden: false
  },
  {
    name: "spades_A",
    value: "SA",
    num: 14,
    opacity: 1,
    image: spades_A,
    hidden: false
  },
  {
    name: "spades_K",
    value: "SK",
    num: 13,
    opacity: 1,
    image: spades_K,
    hidden: false
  },
  {
    name: "spades_Q",
    value: "SQ",
    num: 12,
    opacity: 1,
    image: spades_Q,
    hidden: false
  },
  {
    name: "spades_J",
    value: "SJ",
    num: 11,
    opacity: 1,
    image: spades_J,
    hidden: false
  },
  {
    name: "spades_10",
    value: "S10",
    num: 10,
    opacity: 1,
    image: spades_10,
    hidden: false
  },
  {
    name: "spades_9",
    value: "S9",
    num: 9,
    opacity: 1,
    image: spades_9,
    hidden: false
  },
  {
    name: "spades_8",
    value: "S8",
    num: 8,
    opacity: 1,
    image: spades_8,
    hidden: false
  },
  {
    name: "spades_7",
    value: "S7",
    num: 7,
    opacity: 1,
    image: spades_7,
    hidden: false
  },
  {
    name: "spades_6",
    value: "S6",
    num: 6,
    opacity: 1,
    image: spades_6,
    hidden: false
  },
  {
    name: "spades_5",
    value: "S5",
    num: 5,
    opacity: 1,
    image: spades_5,
    hidden: false
  },
  {
    name: "spades_4",
    value: "S4",
    num: 4,
    opacity: 1,
    image: spades_4,
    hidden: false
  },
  {
    name: "spades_3",
    value: "S3",
    num: 3,
    opacity: 1,
    image: spades_3,
    hidden: false
  },
  {
    name: "spades_2",
    value: "S2",
    num: 2,
    opacity: 1,
    image: spades_2,
    hidden: false
  },
  {
    name: "clubs_A",
    value: "CA",
    num: 14,
    opacity: 1,
    image: clubs_A,
    hidden: false
  },
  {
    name: "clubs_K",
    value: "CK",
    num: 13,
    opacity: 1,
    image: clubs_K,
    hidden: false
  },
  {
    name: "clubs_Q",
    value: "CQ",
    num: 12,
    opacity: 1,
    image: clubs_Q,
    hidden: false
  },
  {
    name: "clubs_J",
    value: "CJ",
    num: 11,
    opacity: 1,
    image: clubs_J,
    hidden: false
  },
  {
    name: "clubs_10",
    value: "C10",
    num: 10,
    opacity: 1,
    image: clubs_10,
    hidden: false
  },
  {
    name: "clubs_9",
    value: "C9",
    num: 9,
    opacity: 1,
    image: clubs_9,
    hidden: false
  },
  {
    name: "clubs_8",
    value: "C8",
    num: 8,
    opacity: 1,
    image: clubs_8,
    hidden: false
  },
  {
    name: "clubs_7",
    value: "C7",
    num: 7,
    opacity: 1,
    image: clubs_7,
    hidden: false
  },
  {
    name: "clubs_6",
    value: "C6",
    num: 6,
    opacity: 1,
    image: clubs_6,
    hidden: false
  },
  {
    name: "clubs_5",
    value: "C5",
    num: 5,
    opacity: 1,
    image: clubs_5,
    hidden: false
  },
  {
    name: "clubs_4",
    value: "C4",
    num: 4,
    opacity: 1,
    image: clubs_4,
    hidden: false
  },
  {
    name: "clubs_3",
    value: "C3",
    num: 3,
    opacity: 1,
    image: clubs_3,
    hidden: false
  },
  {
    name: "clubs_2",
    value: "C2",
    num: 2,
    opacity: 1,
    image: clubs_2,
    hidden: false
  }
];

export function getCards() {
  return Cards.map(c => c);
}
