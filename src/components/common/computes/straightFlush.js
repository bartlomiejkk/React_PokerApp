const StraightFlush = drawn => {
  let count = 0;
  let straight = false;
  let flush = false;
  let result = drawn.map(d => d.num);

  const compare = (a, b) => a - b;
  result = result.sort(compare);
  const copyArray = [];
  for (let i = 0; i < 5; i++) copyArray.push(result[0] + i); // creating fake card draw that matches Straight
  if (result.toString() === copyArray.toString()) straight = true;

  result = drawn.map(d => d.num);
  result = drawn.map(d => d.value.slice(0, 1));
  result.forEach(r => {
    let re = new RegExp(r, "g");
    let str = result.toString().replace(/,/g, "");
    count = str.match(re).length;
  });

  if (count === 5) flush = true;
  if (straight && flush) return true;

  return false;
};

export default StraightFlush;
