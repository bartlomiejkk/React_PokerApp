const WinningsList = [
  {
    name: "Royal Flush",
    value: 200
  },
  {
    name: "Straight Flush",
    value: 100
  },
  {
    name: "Four of a Kind",
    value: 50
  },
  {
    name: "Full House",
    value: 25
  },
  {
    name: "Flush",
    value: 15
  },
  {
    name: "Straight",
    value: 10
  },
  {
    name: "Three of a Kind",
    value: 5
  },
  {
    name: "Two Pairs",
    value: 2
  }
];

export function getWinningsList() {
  return WinningsList.map(item => item);
}

export function getWinningsListByName() {
  return WinningsList.map(item => item.name);
}

export function getWinningsListElem(e) {
  return WinningsList.filter(item => item.name === e);
}
