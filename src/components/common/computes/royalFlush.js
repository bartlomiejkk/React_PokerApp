const RoyalFlush = drawn => {
  const compare = (a, b) => a - b;
  let count = 0;

  let result = drawn.map(d => d.value.slice(0, 1));
  result.forEach(r => {
    let re = new RegExp(r, "g");
    let str = result.toString().replace(/,/g, "");
    count = str.match(re).length;
  });

  result = drawn.map(d => d.num);
  result = result.sort(compare);
  if (count === 5 && result.toString() === "10,11,12,13,14") return true; // 11=J, 12=Q, 13=K, 14=A
  return false;
};

export default RoyalFlush;
